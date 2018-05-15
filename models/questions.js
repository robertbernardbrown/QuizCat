const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionsSchema = new Schema({
  questions: { type: Array, required: true },
  dateAccessed: { type: Date, default: Date.now }
});

const Questions = mongoose.model("Questions", questionsSchema);

module.exports = Questions;