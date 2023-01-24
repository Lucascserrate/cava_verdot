const { Address, AllCountry, AllState, AllCity } = require("../../db");

const getAddressByUserId = async (req, res) => {
  const { userId } = req.params;
  const verifyId = req.verifyId;
  try {
    //capa de seguridad
    if (!userId) {
      res.status(400).send("userId is required");
    } else {
      if (parseInt(userId) !== verifyId)
        return res.status(400).send("Not authorized");
    }
    const currentAddress = await Address.findOne({
      where: {
        id_user: userId,
      },
    });
    if (currentAddress) {
      const countryName = await AllCountry.findByPk(
        currentAddress.dataValues.countryId
      );
      const stateName = await AllState.findByPk(
        currentAddress.dataValues.stateId
      );
      const cityName = await await AllCity.findByPk(
        currentAddress.dataValues.cityId
      );
      currentAddress.dataValues.countryName = countryName.dataValues.name;
      currentAddress.dataValues.stateName = stateName.dataValues.name;
      currentAddress.dataValues.cityName = cityName.dataValues.name;
      console.log(countryName);
      console.log(stateName);
      console.log(cityName);
      console.log(currentAddress);
      return res.status(200).send(currentAddress);
    }
    return res.status(400).send("este usuario no tiene address");
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = getAddressByUserId;
