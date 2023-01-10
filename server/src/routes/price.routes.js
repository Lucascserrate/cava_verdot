const { Router } = require("express");
const router = Router();
const price = require("./controllers/orderByPrice");
router.get("/", price);
module.exports = router;
