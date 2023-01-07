const { Router } = require("express");
const router = Router();
const { orderDesc } = require("./controllers/orderProductsDesc.js");


router.get("/", orderDesc);

module.exports = router;
