const router = require("express").Router();
const db = require("../models");

router.get("/statement", (req, res) => {
  db.Statement.find()
    .populate("username")
    .then(foundStatements => {
      res.status(200).json(foundStatements);
    })
    .catch(err => {
      console.log(err);
      res.send({ message: "error404 in controller '/statement'" });
    });
});

// creating new statement
router.post("/statement", (req, res) => {
  db.Statement.create();
  res.redirect("/finTrack");
});

router.get("/user", (req, res) => {
  db.Users.find()
    .populate("statement")
    .then(foundUsers => {
      res.status(200).json(foundUsers);
    })
    .catch(err => {
      console.log(err);
      res.send({ message: "error404 in controller '/user'" });
    });
});

module.exports = router;
