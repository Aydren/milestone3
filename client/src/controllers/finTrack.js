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
  db.Statement.create(req.body);
  res.status(200).json({ message: "upload sent new statement" });
});

// creating new user
router.post("/new-user", (req, res) => {
  db.Users.create(req.body);
  res.status(200).json({ message: "upload sent new user" });
});

// getting a specific statement according to its id
router.get("/statement/:id", (req, res) => {
  db.Statement.findById(req.params.id).then(statementId => {
    res.status(200).json(statementId);
  });
});

// editing a specific statement according to its id
router.put("/statement/:id/edit", (req, res) => {
  db.Statement.updateOne(req.params.id)
    .then(statementId => {
      console.log(db.Statement.id);
      res.status(200).json(statementId);
    })
    .catch(err => {
      console.log("err", err);
      res.render("error404");
    });
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

// checking if users matches from db
router.post("/user", (req, res) => {
  db.Users.findOne({
    username: req.body.username,
  }).then(user => {
    if (!user || req.body.password !== user.password) {
      res.status(404).json({ message: "user not found" });
    } else {
      console.log(user);
      res.json(user);
    }
  });
});

module.exports = router;
