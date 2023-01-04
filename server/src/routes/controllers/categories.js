const { Category } = require('../../db');

const getAllCategories = async (req, res) => {
    try {
        const allCategories = await Category.findAll()
        res.status(200).send(allCategories)
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}

module.exports = getAllCategories;
