const { Router } = require("express");
const router = Router();

const {
  midlewareValidation,
} = require("./auth/midlewares/midlewareValidation.js");

const { getAllProducts } = require("./controllers/getProducts.js");
const {
  getProductsHighSores,
} = require("./controllers/getProductsHighScores.js");
const { postProduct } = require("../routes/controllers/postProducts.js");
const postReviews = require("./controllers/postReviews.js");
const putProduct = require("./controllers/putProduct.js");
const Rating = require("./controllers/orderByRating.js");
const getReviewsByDrinkId = require("./controllers/getReviewsByDrinkId.js");
const putReview = require("./controllers/putReview.js");

router.get("/highScore", getProductsHighSores);
router.get("/", getAllProducts);
router.get("/?name", getAllProducts);
router.get("/?category", getAllProducts);
router.get("/?rating", Rating);
router.get("/?price", Rating);
router.get("/review/:drinkId", getReviewsByDrinkId);
router.get("/:id", getAllProducts);

router.post("/review", postReviews);
router.post("/", midlewareValidation, postProduct);

router.put("/review/:reviewId", putReview);
router.put("/", putProduct);

module.exports = router;
