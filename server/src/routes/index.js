const { Router } = require("express");
const router = Router();
const category = require("./categories.routes.js");
const productMiddleware = require("./products.routes.js");
const countrys = require("./countrys.routes.js");
const drinks = require("./drinksIntegred.routes.js");
const order = require("./orderProductsDesc.routes");
const users = require("./users.routes.js");
const mail = require("./sendMail.js")

const checkOut = require("./controllers/checkOut.js");

const shopingCart = require("./shopingCart.routes.js");
const authRouter = require('./auth/index')

router.use("/categories", category);
router.use("/products", productMiddleware);
router.use("/countries", countrys);
router.use("/drinks", drinks);
router.use("/order", order);
router.post("/checkout", checkOut);

router.use("/users", users);

router.use("/shopingCart", shopingCart);

router.use('/auth', authRouter)

router.use('/mail',mail )

module.exports = router;
