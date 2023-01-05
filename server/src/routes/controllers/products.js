const { Drink, Category } = require('../../db');

const getAllProducts = async (req, res) => {
  const { id } = req.params
  const { name } = req.query
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

    if (id) {
      const drinksId = allDrinks.filter(e => e.id === id)

      drinksId.length ? res.status(200).send(drinksId) : res.status(404).send('drinks id not found')
    }

    else if (name) {
      const drinksName = allDrinks.filter(e => e.name.toLowerCase().includes(name.toLowerCase()))

      drinksName.length ? res.status(200).send(drinksName) : res.status(404).send('drink not found')
    }

    else res.status(200).send(allDrinks)


  } catch (error) {
    res.status(500).send({ error: error.message })
  }
}



module.exports = getAllProducts;