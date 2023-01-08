const { Router } = require("express");
const router = Router();
const getAllCategories = require("./controllers/categories.js");
const getSubCategories = require("./controllers/subCategories.js");
const postCategory = require("./controllers/postCategory.js");
router.get("/subCategory", getSubCategories);
router.get("/", getAllCategories);
router.post("/", postCategory);
module.exports = router;
