const { Drink, Category, Country } = require("../../db");
const filterByPrice = require("./FilterFunctions/FilterByPrice.js");
const FilterById = require("./FilterFunctions/FilterById.js");
const FilterByName = require("./FilterFunctions/FilterByName");
const FilterCategory = require("./FilterFunctions/FilterCategory.js")
const FilterCountry = require("./FilterFunctions/FilterCountry.js")
const getAllProducts = async (req, res) => {
  const { id } = req.params;
  const { name, country, category, price } = req.query;

  try {
    let drinks = await Drink.findAll({
      include: [
        {
          model: Country,
        },
        {
          model: Category,
        },
      ],
    })
    if (name) {
      drinks = await FilterByName(drinks, name)
    }
    if (id) {
      drinks = await FilterById(drinks, id)
    }
    if (price) {
      drinks = await filterByPrice(drinks, price)
    }

    if (category) {

      let categoryFirstToMayus = await category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();

      let categoryExist = await Category.findOne({
        where: {
          category: categoryFirstToMayus
        }
      })
      if (categoryExist === null) {
        res.status(404).json(`the category '${category}' not found`)
      }
      if (categoryExist) {
        drinks = await FilterCategory(drinks, categoryFirstToMayus)
        if (await drinks.length === 0) {
          return res.status(404).json({ error: "No hay ningun elemento con esta categoria" })
        }
      }
    }

    if (country) {
      let countryFirstToMayus = country.charAt(0).toUpperCase() + country.slice(1).toLowerCase();
      let countryExist = await Country.findOne({
        where: {
          country: countryFirstToMayus
        }
      })

      if (countryExist === null) {
        res.status(404).json(`the category '${category}' not found`)
      }

      if (countryExist) {
        drinks = await FilterCountry(drinks, countryFirstToMayus)
        if (await drinks.length === 0) {
          return res.status(404).json({ error: "No hay ningun elemento con este pais" })
        }
      }
    }


    return res.status(200).send(await drinks);

  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};


module.exports = { getAllProducts };
