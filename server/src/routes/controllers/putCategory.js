const { Category } = require("../../db.js")
const putCategory = async (req, res) => {
    try {
        const { categoryId } = req.query

        const { category } = req.body

        const categoryUp = await Category.update({
            category: category
        }, {
            where: { id: categoryId }
        })

        res.status(200).json(await "The country was Updated")

    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

module.exports = putCategory;