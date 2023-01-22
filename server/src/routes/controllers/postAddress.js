const { AllCountry, AllState, AllCity, Address } = require("../../db");

const postAddress = async (req, res) => {
  const { userId } = req.params;
  const verifyId = req.verifyId;
  const {
    countryId,
    stateId,
    cityId,
    postalCode,
    phone,
    streetName,
    streetNumber,
    reference,
  } = req.body;
  try {
    //Capa de seguridad
    if (!userId) {
      res.status(400).send("userId is required");
    } else {
      if (parseInt(userId) !== verifyId)
        return res.status(400).send("Not authorized");
    }
    const errors = {};
    //verificar countryId
    if (!countryId) {
      errors.countryId = "countryId is required";
    } else {
      const country = AllCountry.findByPk(countryId);
      if (!country) errors.countryIdExist = "country not found";
    }
    //verificar stateId
    if (!stateId) {
      errors.stateId = "stateId is required";
    } else {
      const state = AllState.findByPk(stateId);
      if (!state) errors.stateIdExist = "state not found";
    }
    //verificar cityId
    if (!cityId) {
      errors.cityId = "stateId is required";
    } else {
      const city = AllCity.findByPk(cityId);
      if (!city) return (errors.cityIdExist = "city not fount");
    }
    //verificar postalCode
    if (isNaN(postalCode)) errors.postalCode = "must be a number";
    //verificar phone
    if (!phone) {
      errors.phone = "phone is required";
    } else {
      if (!/^[+0-9 \-]*/.test(phone)) errors.phoneNumber = "invalid format";
    }
    !streetName ? (errors.streetName = "streetName is required") : null;
    !streetNumber ? (errors.streetNumber = "streetNumber is required") : null;
    //si hay errores se envia objeto de errores
    if (Object.keys(errors).length) return res.status(400).send(errors);
    //si todo va bien se crea la direccion
    const newAddress = await Address.create({
      id_user: userId,
      countryId,
      stateId,
      cityId,
      postalCode,
      phone,
      streetName,
      streetNumber,
      reference: reference ? reference : null,
    });
    res.status(200).send(newAddress);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

module.exports = postAddress;
