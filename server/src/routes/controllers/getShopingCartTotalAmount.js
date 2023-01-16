const { User, Drink, ShopingCart } = require("../../db");
const { Op } = require("sequelize");
const { use } = require("../categories.routes");

const getShopingCartTotalAmount = async (req, res) => {
  const { userId } = req.query;
  try {
    //validando datos recibidos
    if (!userId) {
      return res.status(400).send("userId is requiered");
    } else {
      const searchUser = await User.findByPk(userId);
      if (searchUser === null)
        return res.status(400).send("This user does not exist");
    }
    //obteniendo bebidas seleccionadas por el usuario
    const totalAmount = await ShopingCart.sum("amount", {
      where: { userId: userId },
    });
    return res.status(200).send({ totalAmount });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = { getShopingCartTotalAmount };
