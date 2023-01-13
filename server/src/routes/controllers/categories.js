const { Category } = require("../../db");
const { categorys } = require("../../../api");
const getAllCategories = async (req, res) => {
  try {
    let cate = await categorys.map((catego) => {
      Category.findOrCreate({
        where: { category: catego.category },
      });
    });
    const allCategories = await Category.findAll();
    res.status(200).send(allCategories);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
module.exports = getAllCategories;
