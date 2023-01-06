const express = require("express");
const getSubCategory = express.Router();
const { sub_category } = require("../index");
getSubCategory.get("/subCategory", async (req, res) => {
  try {
    res.json(sub_category);
  } catch (error) {
    res.json(error.message)
  }
});
module.exports = getSubCategory;