const { User, Drink, Role, ShopingCart } = require("../../db");
const { Op, Model } = require("sequelize");

const getShopingCart = async (req, res) => {
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
    const inCart = await ShopingCart.findAll({
      where: {
        userId: userId,
        amount: {
          [Op.not]: [0],
        },
      },
      attributes: ["amount", "drinkId"],
    });
    //le damos formato antes de enviar al front
    let cart = [];
    let aux;
    if (inCart.length) {
      cart = await Promise.all(
        inCart.map(async (drink) => {
          aux = await Drink.findByPk(drink.drinkId, {
            attributes: ["name", "price", "image"],
          });
          return {
            name: aux.name,
            image: aux.image,
            price: aux.price,
            amount: drink.amount,
            subtotal: aux.price * drink.amount,
          };
        })
      ).then((e) => e);
    }
    return res.status(200).send(cart);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = { getShopingCart };
