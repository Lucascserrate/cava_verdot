const { AllCountry, AllState, AllCity } = require("../../db.js");
const { allCountries } = require("../../../countries.js");
const { states } = require("../../../states.js");
const { cities } = require("../../../cities.js");

const getAllCategories = async (req, res) => {
  try {
    const messages = {};
    //debido a la enorme cantidad de informacion a subir se debe hacer en 3 pasos
    //estos estan comentados en grupos

    /* let countries = await AllCountry.findAll({ limit: 5 });
    if (!countries.length) {
      await AllCountry.bulkCreate(allCountries);
      messages.AllCountry = "todos los paises cargados";
    } */

    /* let allStates = await AllState.findAll({ limit: 5 });
    if (!allStates.length) {
      await AllState.bulkCreate(states);
      messages.states = "estados agregados";
    } */

    /* let allCities = await AllCity.findAll({ limit: 5 });
    if (!allCities.length) {
      await AllCity.bulkCreate(cities);
      messages.cities = "ciudades agregadas";
    } */
    res.status(200).send(messages);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};
module.exports = getAllCategories;
