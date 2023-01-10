const { Router } = require("express");
const router = Router();
const filterByPrice = require("./controllers/filterByPrice");


router.get("/", filterByPrice);
module.exports = router;
