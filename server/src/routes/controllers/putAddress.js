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
  } catch (error) {}
};

module.exports = putAddress;
