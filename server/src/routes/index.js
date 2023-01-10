const { Router } = require("express");
const router = Router();
const category = require("./categories.routes.js");
const productMiddleware = require("./products.routes.js");
const countrys = require("./countrys.routes.js");
const drinks = require("./drinksIntegred.routes.js");
const price = require("./price.routes.js");
const order =  require("./orderProductsDesc.routes")
const users = require("./users.routes.js");
const filter = require("./filterByPrice.route.js");

router.use("/categories", category);
router.use("/products", productMiddleware);
router.use("/countries", countrys);
router.use("/drinks", drinks);
router.use("/price", price);
router.use("/order", order)
router.use("/filter", filter)


router.use("/users", users);

module.exports = router;
