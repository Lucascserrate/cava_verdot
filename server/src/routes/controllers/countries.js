const { Country } = require("../../db");
const { countrys } = require("../../../api");
const getAllCountrys = async (req, res) => {
  try {
    await countrys.map((country) => {
      console.log(country.country.toLowerCase())
      Country.findOrCreate({
        where: { country: country.country.toLowerCase() },
      });
    });
    const allCountrys = await Country.findAll();
    res.status(200).send(allCountrys);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = getAllCountrys;
