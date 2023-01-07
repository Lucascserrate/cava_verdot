const { Router } = require("express");
const router = Router();
const category = require("./categories.routes.js");
const productMiddleware = require("./products.routes.js");
const countrys = require("./countrys.routes.js");
const drinks = require("./drinksIntegred.routes.js");
// const orderDesc = require("./orderProductsDesc.routes.js")

router.use("/categories", category);
router.use("/products", productMiddleware);
router.use("/countries", countrys);
router.use("/drinks", drinks);
// router.use("/orderDesc", orderDesc)
module.exports = router;
