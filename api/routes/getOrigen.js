const express = require("express");
const getCountrys = express.Router();
const { countrys } = require("../index");
getCountrys.get("/countrys", async (req, res) => {
  try {
    res.json(countrys);
  } catch (error) {
    res.json(error.message)
  }
});
module.exports = getCountrys;