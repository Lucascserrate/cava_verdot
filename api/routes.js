const { Router } = require("express");
const router = Router();
const getDrinks = require("./routes/getDrinks.js");
const getCategory = require("./routes/getCategory.js");
const getOrigen = require("./routes/getOrigen.js");
const getSubCategory = require("./routes/getSubCategory.js")
const FilterByOrigen = require("./routes/FilterByOrigen.js")
router.use("/", getDrinks);
router.use("/", getCategory);
router.use("/", getOrigen);
router.use("/", getSubCategory);
router.use("/countrys", FilterByOrigen);
module.exports = router;