const { Router } = require("express");
const router = Router();
const { orderDesc } = require("./controllers/orderProducts.js");

router.get("/", orderDesc);

module.exports = router;
