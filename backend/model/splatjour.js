const mongoose = require("mongoose");
const splatjourSchema = new mongoose.Schema({
  image: { type: String },
  title: { type: String },
  ingredient: { type: String },
  price: { type: Number },
  region: { type: String },

  state: { type: String },
  iduser: { type: mongoose.Schema.Types.ObjectId, ref: "inscription" },
});
module.exports = mongoose.model("lesplatsdusannefa", splatjourSchema);
