const { Router } = require("express");
const router = Router();
const drinkByName = require("./Filter&OrderHistory/SearchByDrink.js")

router.get('/', drinkByName)

module.exports = router; 