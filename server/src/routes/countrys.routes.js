const { Router } = require("express");
const router = Router();
const countries = require("./controllers/countries.js");
const postCountry = require("./controllers/postCountry.js")
router.post("/", postCountry);
router.get("/", countries);
module.exports = router;
