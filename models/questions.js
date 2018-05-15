const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionsSchema = new Schema({
  question: { type: String, required: true },
  correct_answer: { type: String, required: true },
  incorrect_answers: { type: Array, required: true },
  category: { type: String, required: true },
  type: { type: String, required: true },
  difficulty: { type: String, required: true },
  dateAccessed: { type: Date, default: Date.now }
});

const Questions = mongoose.model("Questions", questionsSchema);

module.exports = Questions;