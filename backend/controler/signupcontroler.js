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

//cookie mnin yitb3ath yitfassa5 donc fil back
//  let decodeToken = jwt.verify(token, "privateKey"); //décodage de token par privatekey
// req.user = decodeToken;

// module.exports = {

//   ajoutcompte: async (req, res) => {
//     console.log(req.body);

//     const nouveaucompte= await new authentification(req.body);
//    nouveaucompte
//       .save()
//       .then((status) =>
//         res.status(200).send("votre compte a été bien  crée")
//       )
//       .catch((err) => res.status(500).send("le compte n'a pas été crée"));
//   },

//   supprimercompte: (req, res) => {
//     console.log(`${req.params.id}deleted`);
//     authentification .findByIdAndDelete(req.params.id)
//       .then(res.json("le compte a été bien supprimé"))
//       .catch((err) => res.status(500).send("le compte n'a pas été supprimé"));
//   },

//   modifiercompte: (req, res) => {
//     console.log(req.body, req.params.id);
//     authentification .findByIdAndUpdate(req.params.id, req.body)

//       .then(() => {
//         () => res.json(req.body);
//         console.log(req.body);
//       })
//       .catch((err) => console.log(err))
//       .then(() => res.json("les modification sur le compte ont été bien effecté"));
//   },
// };
//   let token = user.generateToken();

/* res
        .cookie("token", token, {
          expires: new Date(Date.now() + 900000000),
          httpOnly: true,
        })*/
// const token = user.generateToken(); //héritage des méthodes
//res.json(user);
