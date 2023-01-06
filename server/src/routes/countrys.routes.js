const { Router } = require("express");
const router = Router();
const countries = require("./controllers/countries.js");
const filterByCountrys = require("./controllers/filterByCountrys.js");
router.get("/", countries);
router.get("/:country", filterByCountrys);
module.exports = router;
