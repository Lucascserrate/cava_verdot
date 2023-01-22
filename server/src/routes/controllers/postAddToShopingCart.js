const { User, Drink, Role, ShopingCart } = require("../../db");
const { roles } = require("../../../api.js");
const { Op } = require("sequelize");

const postAddToShopingCart = async (req, res) => {
  const { userId, drinkId, amount } = req.body;
  const { add } = req.query;
  try {
    let errors = {};
    //validando datos recibidos
    let newUserPosition;
    let searchDrink;
    if (drinkId) {
      searchDrink = await Drink.findByPk(drinkId);
      searchDrink === null
        ? (errors.drinkId = "This product does not exist")
        : null;
    } else {
      errors.drinkId = "Drink Id is required";
    }
    if (userId) {
      const searchUser = await User.findByPk(userId);
      searchUser === null ? (errors.userId = "Invalid User ID") : null;
    } else {
      newUserPosition = await User.findAndCountAll();
    }
    if (amount !== undefined) {
      amount < 0
        ? (errors.amount = "Invalid amount, cannot be less than 0")
        : null;
      if (searchDrink !== null) {
        amount > searchDrink.stock
          ? (errors.amount = "Invalid amount, cannot be larger than stock")
          : null;
      }
    } else {
      errors.amount = "Amount is required";
    }
    //respuesta en caso de errores
    if (Object.keys(errors).length) return res.status(400).send(errors);
    //cargando roles a la base de datos solo si aún no han sido cargadas
    let allRoles = await Role.findAll();
    if (!allRoles.length) {
      allRoles = await Role.bulkCreate(roles);
    }
    //creando nuevo usuario temporal en caso de ser usuario no logueado
    let newUser;
    let searchShopingCart;
    if (!userId) {
      newUser = await User.create({
        name: "def",
        age: 18,
        email: `def${newUserPosition.count + 1}@def.def`,
        password: "def",
        address: "def",
        emailProvider: "local",
        roleId: 1,
      });
    } else {
      //buscando bebida en el carrito de usuario en caso de previa existencia de usuario
      searchShopingCart = await ShopingCart.findOne({
        where: {
          [Op.and]: [{ userId: userId }, { drinkId: drinkId }],
        },
      });
    }
    if (!searchShopingCart) {
      //agregando bebida y cantidad
      await ShopingCart.create({
        drinkId: drinkId,
        userId: userId ? userId : newUser.id,
        amount: amount,
      });
    } else {
      //actualizando cantidad de bebida
      if (add) {
        await ShopingCart.update(
          {
            amount: searchShopingCart.amount + amount,
          },
          {
            where: {
              [Op.and]: [{ userId: userId }, { drinkId: drinkId }],
            },
          }
        );
      } else {
        await ShopingCart.update(
          {
            amount: amount,
          },
          {
            where: {
              [Op.and]: [{ userId: userId }, { drinkId: drinkId }],
            },
          }
        );
      }
    }
    return res.status(200).send({
      userId: userId ? userId : newUser.id,
      //totalProducts: totalProducts,
      message: `Drink '${searchDrink.name}' has been add`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

module.exports = { postAddToShopingCart };
