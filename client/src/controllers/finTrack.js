const router = require("express").Router();
const db = require("../models");

router.get("/home", (req, res) => {
    db.Statement.find()
    .then(statements => {
        console.log(statements)
        res.json(statements)
    })
    .catch(err => {
        console.log(err)
        res.send({message: 'error404'})
    })
})


module.exports = router;