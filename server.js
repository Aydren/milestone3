require("dotenv").config();
const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT;

// middleware
const app = express();
app.use(cors());

// call to my server
app.get("/api", (req, res) => {
  res.json({
    message: "Yellow world from server.js"
  });
});

app.listen(process.env.PORT, () => {
  console.log("yellow world on " + process.env.PORT);
});