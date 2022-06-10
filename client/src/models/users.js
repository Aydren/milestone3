// requiring mongoose
const mongoose = require("mongoose");
const { Schema } = mongoose;

// users schema (blueprint)
const userSchema = new Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    date: { type: Date, default: Date.now },
  },
  { toJSON: { virtuals: true } }
);

// Virtuals:
userSchema.virtual("statement", {
  ref: "Statement",
  localField: "_id",
  foreignField: "username",
});

// creating model User and export
const Users = mongoose.model("Users", userSchema);
module.exports = Users;
