const mongoose = require("mongoose");
const signup = new mongoose.Schema({
  name: { type: String, required:true },
  firstname: { type: String , required:true},
  phone: { type: Number, required:true },
  mail: { type: String, required:true },
  password: { type: String, required:true },
  role:{type:String, required:true}
});
module.exports = mongoose.model("inscription", signup);