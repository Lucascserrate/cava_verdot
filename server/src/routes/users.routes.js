const { Router } = require("express");
const router = Router();

const {
  midlewareValidation,
} = require("./auth/midlewares/midlewareValidation.js");
const getUserById = require("./controllers/getUserById.js");
const getAllCountries = require("./controllers/getAllCountries.js");
const getAllStatesByCountry = require("./controllers/getAllStatesByCountry.js");
const getCitiesByState = require("./controllers/getCitiesByState.js");
const { postUser } = require("./controllers/postUser.js");
const postAddress = require("./controllers/postAddress.js");
const putUser = require("./controllers/putUser.js");
const deleteUser = require("./controllers/deleteUser.js");

router.get("/address/allCountries", getAllCountries);
router.get("/address/allStates/:countryId", getAllStatesByCountry);
router.get("/address/allCities/:stateId", getCitiesByState);
router.get("/:userId", midlewareValidation, getUserById);
router.post("/", postUser);
router.post("/address/:userId", midlewareValidation, postAddress); //TODO:protejer ruta
router.put("/:userId", midlewareValidation, putUser);
router.delete("/:userId", midlewareValidation, deleteUser);

module.exports = router;
