const { AllCountry, AllState, AllCity, Address } = require("../../db");

const putAddress = async (req, res) => {
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
    if (countryId) {
      const country = AllCountry.findByPk(countryId);
      if (!country) errors.countryIdExist = "country not found";
    }
    //verificar stateId
    if (stateId) {
      const state = AllState.findByPk(stateId);
      if (!state) errors.stateIdExist = "state not found";
    }
    //verificar cityId
    if (cityId) {
      const city = AllCity.findByPk(cityId);
      if (!city) return (errors.cityIdExist = "city not fount");
    }
    //verificar postalCode
    if (postalCode) {
      if (isNaN(postalCode)) errors.postalCode = "must be a number";
    }
    //verificar phone
    if (phone) {
      if (!/^[+0-9 \-]*/.test(phone)) errors.phoneNumber = "invalid format";
    }
    //si hay errores se envia objeto de errores
    if (Object.keys(errors).length) return res.status(400).send(errors);
    //si todo va bien se modifica la direccion
    const oldAddress = await Address.findByPk(userId);
    const newAddress = await oldAddress.update(
      {
        where: {
          id_user: userId,
        },
      },
      {
        countryId: countryId ? countryId : oldAddress.countryId,
        stateId: stateId ? stateId : oldAddress.stateId,
        cityId: cityId ? cityId : oldAddress.cityId,
        postalCode: postalCode ? postalCode : oldAddress.postalCode,
        phone: phone ? phone : oldAddress.phone,
        streetName: streetName ? streetName : oldAddress.streetName,
        streetNumber: streetNumber ? streetNumber : oldAddress.streetNumber,
        reference: reference ? reference : oldAddress.reference,
      }
    );
    res.status(200).send(newAddress);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = putAddress;
