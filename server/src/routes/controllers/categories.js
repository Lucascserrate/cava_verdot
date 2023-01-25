const { Category } = require("../../db");
const { categorys } = require("../../../api");
const getAllCategories = async (req, res) => {
  try {
    await categorys.map((catego) => {
      console.log(catego.category)
      Category.findOrCreate({
        where: { category: catego.category.toLowerCase() },
      });
    });
    const allCategories = await Category.findAll();
    res.status(200).send(allCategories);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
module.exports = getAllCategories;
