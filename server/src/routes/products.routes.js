const { Router } = require("express");
const router = Router();
const { getAllProducts } = require("./controllers/getProducts.js");
const { postProduct } = require("../routes/controllers/postProducts.js");

router.get("/", getAllProducts);
router.get("/:id", getAllProducts);
router.get("/?name", getAllProducts);
router.get("/?category", getAllProducts);

router.post('/', postProduct);
module.exports = router;
