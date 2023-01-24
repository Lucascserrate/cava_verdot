const { Router } = require("express");
const router = Router();
const getAllUser = require("./controllers/getAllUser.js")
 
router.get("/", getAllUser);


module.exports = router;