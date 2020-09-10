const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const signup = new mongoose.Schema({

  name: { type: String, required:true },
  firstname: { type: String , required:true},
  phone: { type: Number, required:true },
  mail: { type: String, required:true },
  password: { type: String, required:true },
  role:{type:String, required:true}
});

  signup.methods.generateToken = function () {
    const token = jwt.sign({ _id: this._id }, "privateKey", { expiresIn: "24h" });
    return token;
  };


module.exports = mongoose.model("inscription", signup);


