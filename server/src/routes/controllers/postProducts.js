const { Drink, Category, Country, SubCategory } = require("../../db");

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
  const role = req.role;
  try {
    if (role !== 3) return res.status(400).send({ message: "Not authorized" });
    let errors = {};
    !category ? (errors.category = `category is required`) : null;
    !name ? (errors.name = `name is required`) : null;
    !description ? (errors.description = "description is required") : null;
    !stock ? (errors.stock = "stock is required") : null;
    !price ? (errors.price = "price is required") : null;
    !image ? (errors.image = "image is required") : null;
    !country ? (errors.country = "country is required") : null;
    !rating ? (errors.rating = "rating  is required") : null;

    if (category) {
      const validateCategory = await Category.findOne({
        where: {
          category: category,
        },
      });
      !validateCategory
        ? (errors.categoryExist = `category '${category}' does not exist`)
        : null;
    }
    if (country) {
      const validateCountry = await Country.findOne({
        where: {
          country: country,
        },
      });
      validateCountry
        ? (errors.countryExist = `country '${country}' does not exist`)
        : null;
    }
    if (Object.keys(errors).length) return res.status(400).send(errors);
    const newProduct = await Drink.create({
      name,
      description,
      stock,
      price,
      rating,
      image,
      countryId: validateCountry.id,
      categoryId: validateCategory.id,
    });

    //res.status(200).send(`Success '${newProduct.name}' has been created`);
    res.status(200).send(`Success has been created`);
  } catch (error) {
    res.status(500).send(console.log(error), { error: error.message });
  }
};

module.exports = { postProduct };
