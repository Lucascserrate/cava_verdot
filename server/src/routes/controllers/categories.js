const { Category } = require('../../db');
const { category } = require('../../../api.js')

const getAllCategories = async (req, res) => {
    try {
        let allCategories = await Category.findAll()
        if(!allCategories.length){
            await Category.bulkCreate(category);
            allCategories = await Category.findAll();
        }
        res.status(200).send(allCategories)
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}

module.exports = getAllCategories;
