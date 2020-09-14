const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const _ = require("lodash");
require("cookie-parser")();
const User = require("../model/signupschema");

module.exports = {
  /********************************inscription************************* */
  register: async (req, res) => {
    try {
      const { name, firstname, phone, mail, password, role } = req.body;

      user = new User({
        //heritage ml user
        name,
        firstname,
        phone,
        mail,
        password,
        role,
      });
      const salt = await bcrypt.genSalt(10); //degre mil7
      user.password = await bcrypt.hash(password, salt);
      await user.save();
      const token = user.generateToken(); //héritage des méthodes
      res
        .cookie("token", token, {
          //key value
          expires: new Date(Date.now() + 900000000),
          httpOnly: true, //acces front
        })
        .send(_.pick(user, ["name", "firstname", "mail", "role"]));

      /********************************/
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error"); // 500 données fausses
    }
  },
  /****************************************** CONNEXION ***************** ***/
  login: async (req, res) => {
    let user = await User.findOne({ mail: req.body.mail });
    if (!user) {
      return res.status(401).send("email ou password sont incorrects");
    }
    const checkPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!checkPassword) {
      return res.status(401).send("email ou password sont incorrects");
    }
    try {
      let token = user.generateToken();
      res
        .cookie("token", token, {
          expires: new Date(Date.now() + 900000000),
          httpOnly: true,
        })
        .send(_.pick(user, ["name", "firstname", "mail", "phone", "role"]));
    } catch (err) {
      console.log(err);
    }
  },
  /********************************* get profil *********************** */
  getProfil: async (req, res) => {
    const user = await User.findById(req.user._id);
    res.send(user);
  },

  logout: async (req, res) => {
    res.clearCookie("token").send("token deleted");
  },
};

