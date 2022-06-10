const db = require("../models");

db.Statement.create([
  {
    username: "62a2d542f607fd658dae109e",
    expenses: "Entertainment",
    location: "Pets mart",
    spent: 10,
    date: 06/07/2022
  },
  {
    username: "62a2d542f607fd658dae109e",
    expenses: "Entertainment",
    location: "Dog park",
    spent: 20,
    date: 06/03/2022
  },
  {
    username: "62a2d542f607fd658dae109e",
    expenses: "Entertainment",
    location: "Costco",
    spent: 30,
    date: 06/08/2022
  },
  {
    username: "62a2d542f607fd658dae109e",
    expenses: "Entertainment",
    location: "Moms shoe",
    spent: 40,
    date: 06/04/2022
  },
  {
    username: "62a2d542f607fd658dae109e",
    expenses: "Entertainment",
    location: "Dads Shoe",
    spent: 50,
    date: 06/08/2022
  },
])
  .then(() => {
    console.log("Success!");
    process.exit();
  })
  .catch(err => {
    console.log("Failure!", err);
    process.exit();
  });
