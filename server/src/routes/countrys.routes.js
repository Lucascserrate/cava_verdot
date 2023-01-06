const { Router } = require("express");
const router = Router();
const countries = require("./controllers/countries.js");
router.get("/", countries);
module.exports = router;
