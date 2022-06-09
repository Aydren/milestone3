const router = require("express").Router();
const db = require("../models");

// gather statements from db
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
  console.log(req.body);
  db.Statement.create(req.body);
  res.status(200).json({ message: "upload sent" });
});

// getting a specific statement according to its id
router.get("/statement/:id", (req, res) => {
  db.Statement.findById(req.params.id)
    .then(statementId => {
      res.status(200).json(statementId);
    });
});

// editing a specific statement according to its id
router.post("/statement/:id/edit", (req, res) => {
  console.log(req.body);
  db.Statement.create(req.body);
  res.status(200).json({ message: "upload sent" });
});

// gather users from db
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
