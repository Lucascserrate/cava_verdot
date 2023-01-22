const { AllCountry } = require("../../db");

const getAllCountries = async (req, res) => {
  try {
    const allCountries = await AllCountry.findAll();
    return res.status(200).send(allCountries);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = getAllCountries;
