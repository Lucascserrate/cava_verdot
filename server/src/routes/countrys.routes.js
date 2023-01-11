const { Router } = require("express");
const router = Router();
const countries = require("./controllers/countries.js");
const postCountry = require("./controllers/postCountry.js");
const putCountry = require("./controllers/putCountry.js");
router.post("/", postCountry);
router.put("/", putCountry)
router.get("/", countries);
module.exports = router;
