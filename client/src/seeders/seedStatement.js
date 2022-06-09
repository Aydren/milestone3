const db = require("../models");

db.Statement.create([
  {
    username: "629d3abaa835b9ae24188909",
    expenses: "Food",
    location: "Kame Omakase",
    spent: 1000,
    date: 06/07/2022
  },
  {
    username: "629d3abaa835b9ae24188909",
    expenses: "Entertainment",
    location: "New Orlean's AMC",
    spent: 20,
    date: 06/03/2022
  },
  {
    username: "629d3abaa835b9ae24188909",
    expenses: "Gas",
    location: "Costco",
    spent: 70,
    date: 06/08/2022
  },
  {
    username: "629d3abaa835b9ae24188909",
    expenses: "Food",
    location: "PT's",
    spent: 40,
    date: 06/04/2022
  },
  {
    username: "629d3abaa835b9ae24188909",
    expenses: "Food",
    location: "Starbucks",
    spent: 3,
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
