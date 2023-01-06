const { Router } = require("express");
const filterByCountrys = require("./controllers/filterByCountrys.js");
const router = Router();
const { getAllProducts } = require("./controllers/products.js");
router.get("/", getAllProducts);
router.get("/:id", getAllProducts);
router.get("/?name", getAllProducts);
router.get("/?country", filterByCountrys)
module.exports = router;
