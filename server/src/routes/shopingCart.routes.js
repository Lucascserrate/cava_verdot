const { Router } = require("express");
const router = Router();
const {
  postAddToShopingCart,
} = require("./controllers/postAddToShopingCart.js");
const { getShopingCart } = require("./controllers/getShopingCart.js");
router.get("/", getShopingCart);
router.post("/", postAddToShopingCart);

module.exports = router;
