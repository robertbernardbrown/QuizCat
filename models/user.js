const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  idUser: { type: Number, required: true },
  nameUser: { type: String, required: true },
  email: { type: String, required: true},
  dateAccessed: { type: Date, default: Date.now },
  score: [{type: Schema.Types.ObjectId, ref: 'Score'}]
});

const User = mongoose.model("User", userSchema);

module.exports = User;