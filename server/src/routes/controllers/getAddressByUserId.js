const { Address } = require("../../db");

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
    return res.status(200).send(currentAddress);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = getAddressByUserId;
