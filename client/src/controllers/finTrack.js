const router = require("express").Router();
const db = require("../models");

router.get("/statement", (req, res) => {
  db.Statement.find()
    .then(foundStatements => {
      res.json(foundStatements);
    })
    .catch(err => {
      console.log(err);
      res.send({ message: "error404 in controller" });
    });
});

router.get("/users", (req, res) => {
  db.Users.find()
    .then(foundUsers => {
      res.json(foundUsers);
    })
    .catch(err => {
      console.log(err);
      res.send({ message: "error404 in controller" });
    });
});

module.exports = router;
