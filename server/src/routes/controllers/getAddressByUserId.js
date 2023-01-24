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
    let datasss = await Promise.all([
      await AllCountry.findByPk(currentAddress.dataValues.countryId),
      await AllState.findByPk(currentAddress.dataValues.stateId),
      await AllCity.findByPk(currentAddress.dataValues.cityId),
    ]).then((e) => console.log(e));
    // console.log(currentAddress.dataValues.countryId);
    // console.log(currentAddress.dataValues.stateId);
    // console.log(currentAddress.dataValues.cityId);
    console.log(datasss);
    return res.status(200).send(currentAddress);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = getAddressByUserId;
