const { Router } = require("express");
const router = Router();
const { postUser } = require("./controllers/postUser.js");

router.post("/", postUser);
//TODO:put user

module.exports = router;
