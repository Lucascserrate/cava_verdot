const { Drink } = require('../../db');

const getAllProducts = async (req, res) => {
    try {
        const allDrinks = await Drink.findAll()
        res.status(200).send(allDrinks)
    } catch (error) {
        res.status(404).send({ error: error.message })
    }
}

module.exports = getAllProducts;
