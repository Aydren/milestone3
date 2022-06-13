const router = require("express").Router();
const db = require("../models");
const bcrypt = require("bcrypt");

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

// gather first 5 statements
router.get("/statement/top-5", (req, res) => {
  db.Statement.find()
    .limit(5)
    .then(statement => {
      res.status(200).json(statement);
    })
    .catch(err => {
      console.log(err);
      res.send({ message: "error404" });
    });
});

// creating new statement
router.post("/statement", (req, res) => {
  db.Statement.create(req.body);
  res.status(200).json({ message: "upload sent new statement" });
});

// getting a specific statement according to its id
router.get("/statement/:id", (req, res) => {
  db.Statement.findById(req.params.id).then(statementId => {
    res.status(200).json(statementId);
  });
});

// editing a specific statement according to its id not currently working since when page is redirected req is empty so we are updating nothing 
router.put("/statement/edit", async (req, res) => {
  try {
    await db.Statement.findById(req.params.id, (err, updateStatement) => {
      console.log(req.params.id, req.body.expenses)
      /* updateStatement.expenses = req.body.expenses;
      updateStatement.location = req.body.location;
      updateStatement.spent = req.body.spent;
      updateStatement.date = req.body.date;
      updateStatement.save() */
    });
  } catch (err) {
    console.log("err", err);
  }
  res.status(200).send('updated statement')
});

// gather users from db
router.get("/users", (req, res) => {
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

// creating new user
router.post("/users/new-user", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(
      req.body.password,
      10 /* the 10 is generating the salt, 10 is also the default value */
    );
    const user = { username: req.body.username, password: hashedPassword };
    db.Users.create(user);
    res.status(200).json({ message: "upload sent new user" });
  } catch {
    err => {
      console.log(err);
      res.status(500).send({ message: "error user not added" });
    };
  }
});

// checking if users matches from db
router.post("/users/sign-in", (req, res) => {
  db.Users.findOne({
    username: req.body.username,
  }).then(async user => {
    if (user == null) {
      res.status(404).json({ message: "user not found" });
    } else if (await bcrypt.compare(req.body.password, user.password)) {
      console.log(user);
      res.json(user);
    } else {
      console.log(err);
    }
  });
});

/* const user = db.Users.find(name => (name.username = req.body.username));

  if (user == null) {
    return res.status(400).send("Cannot find user");
  }
  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      res.send("Login successful");
    } else {
      res.send("recheck your username or password");
    }
  } catch {
    res.status(404).send("catch 404");
  } */

module.exports = router;
