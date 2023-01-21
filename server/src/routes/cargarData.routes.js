const { Router } = require("express");
const router = Router();

const cargarData = require("./controllers/cargarData.js");

router.get("/", cargarData);

module.exports = router;
