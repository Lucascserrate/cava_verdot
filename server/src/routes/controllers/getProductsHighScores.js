const { Drink } = require("../../db");

const getProductsHighSores = async (req, res) => {
  try {
    let drinks = await Drink.findAll({
      order: [["rating", "DESC"]],
      limit: 10,
      attributes: ["name", "image", "price", "id"],
    });
    return res.status(200).send(drinks);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = { getProductsHighSores };
