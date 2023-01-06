const express = require("express");
const getCategory = express.Router();
const { category } = require("../index");
getCategory.get("/category", async (req, res) => {
  try {
    res.json(category);
  } catch (error) {
    res.json(error.message);
  }
});
module.exports = getCategory;
