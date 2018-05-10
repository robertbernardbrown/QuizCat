const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scoreSchema = new Schema({
  userName: [{type: Schema.Types.ObjectId, ref: 'User'}],
  category: { type: String, required: true },
  timeFinished: { type: String, required: true },
  dateAccessed: { type: Date, default: Date.now }
});

const Score = mongoose.model("Score", scoreSchema);

module.exports = Score;