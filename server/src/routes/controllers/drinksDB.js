const { drinks } = require("../../../api");
const { Drink, Category, Country } = require("../../db.js");

const drinksDB = async (req, res) => {
  const drinksAPI = await drinks;

  let list = Promise.all(
    drinksAPI.map(async (drink) => {
        let categoryDB = await Category.findOne({
          where: {
            category: drink.category,
          },
        });
        let countryDB = await Country.findOne({
          where: {
            country: drink.country,
          },
        });
        let newDrink = await Drink.findOrCreate({
          where: {
            name: drink.name,
            description: drink.description,
            rating: drink.rating,
            price: drink.price,
            image: drink.image,
            stock: drink.stock,
            categoryId: await categoryDB.id,
            countryId: await countryDB.id,
          },
        });
        return await newDrink;
    })
  ).then((response) => res.json(response));

  // res.json(drinksAPI.length)
};
module.exports = drinksDB;
