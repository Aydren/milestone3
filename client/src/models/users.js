// requiring mongoose
const mongoose = require("mongoose");
const { Schema } = mongoose;
const Statement = require('./statement')

// users schema (blueprint)
const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { toJSON: { virtuals: true } }
);

// Virtuals:
userSchema.virtual("statement", {
  ref: "Statement",
  localField: "_id",
  foreignField: "user",
});

// creating model User and export
const User = mongoose.model("User", userSchema);
module.exports = User;
