const { Drink } = require("../../db.js")

const putProduct = async (req, res) => {
    try {
        const { queryId } = req.query
        const { id, name, description, stock, price, rating, image, category, country } = req.body
        await Drink.update({
            id: id === 0 ? undefined : id,
            name: name === "" ? undefined : name,
            description: description,
            stock: stock < 0 ? undefined : stock,
            price: price < 0 ? undefined : price,
            rating: rating,
            image: image,
            categoryId: category === 0 ? undefined : category,
            countryId: country === 0 ? undefined : country
        }, {
            where: { id: queryId }
        })

        res.status(200).json(await Drink.findOne({ where: { id: id } }))

    } catch (error) {
        res.status(404).send({ error: error.message });
    }
};

module.exports = putProduct;