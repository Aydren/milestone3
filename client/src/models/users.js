// requiring mongoose
const mongoose = require("mongoose");
const { Schema } = mongoose;

// users schema (blueprint)
const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

// creating model User
const User = mongoose.model("User", userSchema);
module.exports = User;
