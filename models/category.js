const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  category: { type: String, required: true },
  dateChosen: { type: Date, default: Date.now }
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;