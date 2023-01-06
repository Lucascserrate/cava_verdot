const { Router } = require("express");
const router = Router();
const drinksDB = require("./controllers/drinksDB.js");
router.get("/", drinksDB);
module.exports = router;