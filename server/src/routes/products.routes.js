const { Router } = require("express");
const router = Router();
const putProduct = require("./controllers/putProduct.js");
const { getAllProducts } = require("./controllers/getProducts.js");
const { postProduct } = require("../routes/controllers/postProducts.js");
const Rating = require("./controllers/orderByRating.js");
const {
  midlewareValidation,
} = require("./auth/midlewares/midlewareValidation.js");
//const passport = require("passport");
//require("./auth/midlewares/passport.js");

router.get("/", getAllProducts);
router.get("/:id", getAllProducts);
router.get("/?name", getAllProducts);
router.get("/?category", getAllProducts);
router.post("/", midlewareValidation, postProduct);
router.put("/", putProduct);
router.get("/?rating", Rating);
router.get("/?price", Rating);
module.exports = router;
