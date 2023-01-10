const { Router } = require("express");
const router = Router();
const filterByCountry = require("./controllers/filterByCountry");


router.get("/", filterByCountry);
module.exports = router;
