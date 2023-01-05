const { Drink, Category } = require('../../db');

const getAllProducts = async (req, res) => {
  const { category } = req.query;
    try {
      if (category) {
        const AllOfcategory = await Category.findOne({
          where: {
            category: category
          }
        })
        if (AllOfcategory !== null) {
          const drinksByCategory = await Drink.findAll({
            where: {
              category: AllOfcategory.id
            },
            include: [{
              model: Category
            }]
          })
          return res.status(200).send(drinksByCategory)
        }
        else {
          return res.status(404).send({ error: `the category '${category}' not found` })
        }
      }
      const allDrinks = await Drink.findAll({
        include: [{
          model: Category
        }]
      })
      res.status(200).send(allDrinks)
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}

module.exports = getAllProducts;
