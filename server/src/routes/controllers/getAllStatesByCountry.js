const { AllCountry, AllState } = require("../../db");

const getAllStatesByCountry = async (req, res) => {
  const { countryId } = req.params;
  try {
    const errors = {};
    //validando countryId
    if (countryId === "null") {
      errors.countryId = "Select country";
    } else {
      const countryIdValidator = await AllCountry.findByPk(countryId);
      !Object.keys(countryIdValidator).length
        ? (errors.countryIdValidator = "Country not found")
        : null;
    }
    if (Object.keys(errors).length) return res.status(200).send([errors]);
    const allStates = await AllState.findAll({
      where: {
        id_country: countryId,
      },
    });
    return res.status(200).send(allStates);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = getAllStatesByCountry;
