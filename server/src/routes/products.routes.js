const { Router } = require("express");
const router = Router();
const putProduct = require("./controllers/putProduct.js")
const { getAllProducts } = require("./controllers/getProducts.js");
const { postProduct } = require("../routes/controllers/postProducts.js");
router.get("/", getAllProducts);
router.get("/:id", getAllProducts);
router.get("/?name", getAllProducts);
router.get("/?category", getAllProducts);
router.post('/', postProduct);
router.put("/", putProduct)
module.exports = router;
