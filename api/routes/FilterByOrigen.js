const express = require("express");
const FilterByOrigen = express.Router();
const { drinks } = require("../index");
FilterByOrigen.get("/:origen", async (req, res) => {
  try {
    let countrys = await drinks.filter(
      (drink) => drink.origen === req.params.origen
    );
    res.json(countrys);
  } catch (error) {
    res.json(error.message);
  }
});
module.exports = FilterByOrigen;
