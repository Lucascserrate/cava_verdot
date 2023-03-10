const { Router } = require("express");
const router = Router();
const category = require("./categories.routes.js");
const productMiddleware = require("./products.routes.js");
const countrys = require("./countrys.routes.js");
const drinks = require("./drinksIntegred.routes.js");
const order = require("./orderProductsDesc.routes");
const users = require("./users.routes.js");
const alta = require("./routesMails/alta.route.js");
const pago = require("./routesMails/pago.route.js");
const dato = require("./routesMails/datos.route.js");
const baja = require("./routesMails/baja.routes.js");
const news = require("./routesMails/news.route.js");
const welcome = require("./routesMails/welcome.route.js");
const cargarData = require("./cargarData.routes.js");
const history = require("./historial.js")
const getAllUser = require("./getAllUsers.routes.js")
const orderByAmount = require("../routes/historial.js")
const drinkByName = require("./controllers/getNameDrinkHistory.js")
const checkOut = require("./controllers/checkOut.js");

const shopingCart = require("./shopingCart.routes.js");
const authRouter = require('./auth/index');
const { route } = require("./products.routes.js");



router.use("/categories", category);
router.use("/products", productMiddleware);
router.use("/countries", countrys);
router.use("/drinks", drinks);
router.use("/order", order);
router.post("/checkout", checkOut);

router.use("/users", users);

router.use("/shopingCart", shopingCart);

router.use("/auth", authRouter);

router.use('/alta',alta )
router.use('/pago',pago )
router.use('/dato',dato )
router.use('/baja',baja )
router.use('/news', news)
router.use('/welcome', welcome) 
router.use('/history', history )
router.use('/allUser', getAllUser)
router.use('/orderByAmount', orderByAmount )
router.use('/drinkByName', drinkByName )

router.use("/cargarData", cargarData);

module.exports = router;
