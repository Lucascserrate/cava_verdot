const { Router } = require("express");
const router = Router();
const getUserById = require("./controllers/getUserById.js");
const { postUser } = require("./controllers/postUser.js");
const {
  midlewareValidation,
} = require("./auth/midlewares/midlewareValidation.js");
const putUser = require("./controllers/putUser.js");
const passport = require("passport");
const deleteUser = require("./controllers/deleteUser.js");

router.get("/:userId", midlewareValidation, getUserById);
router.post("/", postUser);
router.put("/:userId", midlewareValidation, putUser);
router.delete("/:userId", midlewareValidation, deleteUser)

module.exports = router;
