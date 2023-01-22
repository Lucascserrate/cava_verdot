const { Router } = require("express");
const router = Router();

const {
  midlewareValidation,
} = require("./auth/midlewares/midlewareValidation.js");
const getUserById = require("./controllers/getUserById.js");
const { postUser } = require("./controllers/postUser.js");
const postAddress = require("./controllers/postAddress.js");
const putUser = require("./controllers/putUser.js");
const deleteUser = require("./controllers/deleteUser.js");

router.get("/:userId", midlewareValidation, getUserById);
router.post("/", postUser);
router.post("/address", postAddress);
router.put("/:userId", midlewareValidation, putUser);
router.delete("/:userId", midlewareValidation, deleteUser);

module.exports = router;
