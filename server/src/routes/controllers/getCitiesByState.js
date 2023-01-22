const { AllState, AllCity } = require("../../db");

const getAllCitiesByState = async (req, res) => {
  const { stateId } = req.params;
  try {
    const errors = { id: 1 };
    //validando countryId
    if (stateId === "null") {
      errors.name = "Select state";
    } else {
      const stateIdValidator = await AllState.findByPk(stateId);
      !Object.keys(stateIdValidator).length
        ? (errors.stateIdValidator = "State not found")
        : null;
    }
    if (Object.keys(errors).length) return res.status(200).send([errors]);
    const allCities = await AllCity.findAll({
      where: {
        id_state: stateId,
      },
    });
    return res.status(200).send(allCities);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = getAllCitiesByState;
