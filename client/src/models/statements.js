// requiring mongoose
const mongoose = require("mongoose");
const { Schema } = mongoose;

// users schema (blueprint)
const statementSchema = new Schema({
  user: { type: String, required: true },
  category: { type: String, required: true },
  location: { type: String },
  spent: { type: Number, required: true },
  date: { type: Date, required: true },
});

// creating model Statement
module.exports = mongoose.model("Statement", statementSchema, 'statement');
