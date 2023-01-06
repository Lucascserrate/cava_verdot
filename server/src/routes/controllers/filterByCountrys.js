const { drinks } = require("../../../api.js");

/*
filterByCountrys.get("/:country", async (req, res) => {
  try {
    let countrys = await drinks.filter(
      (drink) => drink.country === req.params.country
    );
    res.json(await countrys);
  } catch (error) {
    res.json(error.message);
  }
});
*/

const filterByCountrys = async (req, res) => {
  try {
    let countrys = await drinks.filter(
      (drink) => drink.country === req.params.country
    );
    res.json(await countrys);
  } catch (error) {}
};

module.exports = filterByCountrys;
