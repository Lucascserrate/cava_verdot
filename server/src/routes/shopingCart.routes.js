const { Router } = require("express");
const router = Router();
const { getShopingCart } = require("./controllers/getShopingCart.js");
const {
  postAddToShopingCart,
} = require("./controllers/postAddToShopingCart.js");
const {
  deleteItemShopingCart,
} = require("./controllers/deleteItemShopingCart");

router.get("/", getShopingCart);
router.post("/", postAddToShopingCart);
router.delete("/", deleteItemShopingCart);

module.exports = router;
