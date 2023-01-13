const { User, Drink, ShopingCart } = require("../../db");
const { Op } = require("sequelize");

const deleteItemShopingCart = async (req, res) => {
  const { userId, drinkId } = req.body;
  try {
    //validando datos recibidos
    if (!userId) {
      return res.status(400).send("userId is requiered");
    } else {
      const searchUser = await User.findByPk(userId);
      if (searchUser === null)
        return res.status(400).send("This user does not exist");
    }
    let searchDrink;
    if (!drinkId) {
      return res.status(400).send("drinkId is requiered");
    } else {
      searchDrink = await Drink.findByPk(drinkId);
      if (searchDrink === null)
        return res.status(400).send("This drink does not exist");
    }
    //eliminando bebida seleccionada por el usuario
    await ShopingCart.destroy({
      where: {
        [Op.and]: [{ drinkId: drinkId }, { userId: userId }],
      },
    });
    return res.status(200).send(`${searchDrink.name} has been deleted`);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = { deleteItemShopingCart };
