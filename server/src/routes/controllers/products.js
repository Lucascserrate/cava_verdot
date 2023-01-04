const { Drink, Category } = require('../../db');

const getAllProducts = async (req, res) => {
    try {
        const allDrinks = await Drink.findAll({
          include: [{
            model: Category
          }]
        })
        res.status(200).send(allDrinks)
    } catch (error) {
        res.status(404).send({ error: error.message })
    }
}

module.exports = getAllProducts;
