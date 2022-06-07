require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Mongo connected DB at:", process.env.MONGO_URI);
  }
);

module.exports.User = require("./users.js");
module.exports.Statement = require("./statement");
