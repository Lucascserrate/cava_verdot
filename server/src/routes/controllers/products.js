const { Drink, Category, Country, SubCategory } = require("../../db");

const getAllProducts = async (req, res) => {
  const { id } = req.params;
  const { name } = req.query;
  const { category } = req.query;
  const { country } = req.query;
  try {
    if (category) {
      const AllOfcategory = await Category.findOne({
        where: {
          category: category,
        },
      });
      if (AllOfcategory !== null) {
        const drinksByCategory = await Drink.findAll({
          where: {
            category: AllOfcategory.id,
          },
          include: [
            {
              model: Category,
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
      const AllOfcountry = await Country.findOne({
        where: {
          country: country,
        },
      });
      if (AllOfcountry !== null) {
        const drinksByCountry = await Drink.findAll({
          where: {
            country: AllOfcountry.id,
          },
          include: [
            {
              model: Country,
            },
          ],
        });
        return res.status(200).send(drinksByCountry);
      } else {
        return res
          .status(404)
          .send({ error: `the category '${category}' not found` });
      }
    }

    const allDrinks = await Drink.findAll({
      include: [
        {
          model: Category,
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

const postProduct = async (req, res) => {
  const {
    name,
    description,
    stock,
    price,
    image,
    country,
    rating,
    category,
    subCategory,
  } = req.body;
  try {
    const validateCategory = await Category.findOne({
      where: {
        category: category,
      },
    });
    if (validateCategory === null)
      return res.status(404).send(`category '${category}' does not exist`);
    const validateCountry = await Country.findOne({
      where: {
        country: country,
      },
    });
    if (validateCountry === null)
      return res.status(404).send(`country '${country}' does not exist`);
    const validateSubCategory = SubCategory.findOne({
      where: {
        subCategory: subCategory,
      },
    });
    if (validateSubCategory === null)
      return res
        .status(404)
        .send(`subCategory '${subCategory}' does not exist`);
    const newProduct = await Drink.create({
      name,
      description,
      stock,
      price,
      rating,
      image,
      country: validateCountry.id,
      categoryId: validateCategory.id,
    });

    res.status(200).send(`Success '${newProduct.name}' has been created`);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = { getAllProducts, postProduct };
