
const { Drink, Category, Country } = require("../../db");

const getAllProducts = async (req, res) => {
  const { id } = req.params;
  const { name } = req.query;
  const { category } = req.query;
  const { country } = req.query;
  
  try {
    if (category) {
      let categoryFirstToMayus = category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();
      const AllOfcategory = await Category.findOne({
        where: {
          category: categoryFirstToMayus,
        },
      });
      if (AllOfcategory !== null) {
        const drinksByCategory = await Drink.findAll({
          where: {
            categoryId: AllOfcategory.id,
          },
          include: [
            {
              model: Category,
            },
            {
              model: Country,
            },
          ],
        });
        return res.status(200).send(drinksByCategory);
      } else {
        return res
          .status(404)
          .send({ error: `the category '${category}' not found` });
      }
    }
    if (country) {
      let countryFirstToMayus = country.charAt(0).toUpperCase() + country.slice(1).toLowerCase();
      const AllOfcountry = await Country.findOne({
        where: {
          country: countryFirstToMayus,
        },
      });
      if (AllOfcountry !== null) {
        const drinksBycountry = await Drink.findAll({
          where: {
            countryId: AllOfcountry.id,
          },
          include: [
            {
              model: Country,
            },
            {
              model: Category,
            },
          ],
        });
        return res.status(200).send(drinksBycountry);
      } else {
        return res
          .status(404)
          .send({ error: `the category '${country}' not found` });
      }
    }
    const allDrinks = await Drink.findAll({
      include: [
        {
          model: Category,
        },
        {
          model: Country,
        },
      ],
    });

    if (id) {
      const drinksId = allDrinks.filter((e) => e.id === id);

      drinksId.length
        ? res.status(200).send(drinksId)
        : res.status(404).send("drinks id not found");
    } else if (name) {
      const drinksName = allDrinks.filter((e) =>
        e.name.toLowerCase().includes(name.toLowerCase())
      );

      drinksName.length
        ? res.status(200).send(drinksName)
        : res.status(404).send("drink not found");
    } else res.status(200).send(allDrinks);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};


module.exports = { getAllProducts };


