const { Router } = require("express");
const router = Router();
const getAllCategories = require("./controllers/categories.js");
const getSubCategories = require("./controllers/subCategories.js");
router.get("/subCategory", getSubCategories);
router.get("/", getAllCategories);

module.exports = router;