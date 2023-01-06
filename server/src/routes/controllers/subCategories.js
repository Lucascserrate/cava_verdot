const { SubCategory } = require("../../db");
const { sub_category } = require("../../../api");
const subCategories = async (req, res) => {
  try {
    let cate = await sub_category.map((subCatego) => {
        SubCategory.findOrCreate({
        where: { subCategory: subCatego.subCategory, id: subCatego.id },
      });
    });
    const allSubCategories = await SubCategory.findAll();
    res.status(200).send(allSubCategories);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = subCategories;