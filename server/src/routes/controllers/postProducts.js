const { Drink, Category, Country, SubCategory } = require("../../db");
const { uploadImage } = require("../../Cloudinary/cloudinary.js");

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
    let validateCategory;
    if (category) {
      validateCategory = await Category.findOne({
        where: {
          category: category,
        },
      });
      !validateCategory
        ? (errors.categoryExist = `category '${category}' does not exist`)
        : null;
    }
    let validateCountry;
    if (country) {
      validateCountry = await Country.findOne({
        where: {
          country: country,
        },
      });
      !Object.keys(validateCountry).length
        ? (errors.countryExist = `country '${country}' does not exist`)
        : null;
    }

    if (Object.keys(errors).length) return res.status(400).send(errors);

    /* const validateSubCategory = SubCategory.findOne({
      where: {
        subCategory: subCategory,
      },
    });
    if (validateSubCategory === null)
      return res
        .status(404)
        .send(`subCategory '${subCategory}' does not exist`); */

    //si llega la img en base64 guardala en cloudinary
    const result = await uploadImage(image);

    const newProduct = await Drink.create({
      name,
      description,
      stock,
      price,
      rating,
      image: result.url,
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
