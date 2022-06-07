// requiring mongoose
const mongoose = require("mongoose");
const { Schema } = mongoose;

// users schema (blueprint)
const statementSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectID, ref: "user" },
    category: { type: String, required: true },
    location: { type: String },
    spent: { type: Number, required: true },
    date: { type: Date, required: true },
  },
  { toJSON: { virtuals: true } }
);

// creating model Statement and export
const Statement = mongoose.model("Statement", statementSchema);
module.exports = Statement;
