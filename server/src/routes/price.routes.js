const { Router } = require("express");
const router = Router();
const price = require("./controllers/filterByPrice");
router.get("/", price);
module.exports = router;