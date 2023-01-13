const { Drink } = require("../../db.js")

const putProduct = async (req, res) => {
    try {
        const { queryId } = req.query

        const { id, name, description, stock, price, rating, image } = req.body

        const bebida = await Drink.update({
            id: id,
            name: name,
            description: description,
            stock: stock,
            price: price,
            rating: rating,
            image: image
        }, {
            where: { id: queryId }
        })

        res.status(200).json(await Drink.findOne({ where: { id: queryId } }))

    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

module.exports = putProduct;