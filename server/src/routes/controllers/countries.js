const { Country } = require("../../db");
const { countrys } = require("../../../api");
const getAllCountrys = async (req, res) => {
  try {
    let countr = await countrys.map((country) => {
      Country.findOrCreate({
        where: { country: country.country },
      });
    });
    const allCountrys = await Country.findAll();
    res.status(200).send(allCountrys);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = getAllCountrys;
