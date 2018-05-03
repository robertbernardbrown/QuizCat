const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  idUser: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true},
  dateAccessed: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);

module.exports = User;