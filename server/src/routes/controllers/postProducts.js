
const { Drink, Category, Country, SubCategory } = require("../../db");
const {uploadImage} = require("../../Cloudinary/cloudinary.js");

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
  console.log({name,
    description,
    stock,
    price,
    image,
    country,
    rating,
    category,
    subCategory,})
  try {
    //si llega la img en base64 guardala en cloudinary
    const result = await uploadImage(image);
    console.log(result)

    const validateCategory = await Category.findOne({
      where: {
        category: category,
      },
    });
    if (validateCategory === null){
      return res.status(404).send(`category '${category}' does not exist`);
    }
    const validateCountry = await Country.findOne({
      where: {
        country: country,
      },
    });
    if (validateCountry === null){
      return res.status(404).send(`country '${country}' does not exist`);
    }
    /* const validateSubCategory = SubCategory.findOne({
      where: {
        subCategory: subCategory,
      },
    });
    if (validateSubCategory === null)
      return res
        .status(404)
        .send(`subCategory '${subCategory}' does not exist`); */

        
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
    
    res.status(200).send(`Success '${newProduct.name}' has been created`);
  } catch (error) {
    res.status(500).send(console.log(error),{ error: error.message });
  }
};

module.exports = { postProduct };
