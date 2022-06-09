require("dotenv").config();
const express = require("express");
const cors = require("cors");
// requiring Controller
const finTrackerController = require("./client/src/controllers/finTrack");

const PORT = process.env.PORT || 3001;

// middleware
const app = express();
app.use(cors());
app.use(express.json())

app.use("/finTrack", finTrackerController);

// call to my server
app.get("/api", (req, res) => {
  res.json({
    message: "Yellow world from server.js",
  });
});

app.listen(process.env.PORT, () => {
  console.log("yellow world on " + process.env.PORT);
});
