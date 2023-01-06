const express = require("express");
const getDrinks = express.Router();
const { drinks } = require("../index");

getDrinks.get("/drinks", async (req, res) => {
  try {
    let nameDrinks = await drinks.map((drink) => {
      return drink.origen;
    });
    res.json(await drinks);
  } catch (error) {
    res.json(error)
  }
});

module.exports = getDrinks;
