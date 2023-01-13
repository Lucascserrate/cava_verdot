const { Drink } = require("../../db.js");
const Price = async (req, res) => {
  const { price } = req.query;
  if (price == "up") {
    let drinks2 = await Drink.findAll();
    
    let orderByPrice = await drinks2.sort((a, b) => {
      if (a.price < b.price) {
        return 1;
      }
      if (a.price > b.price) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
    res.json(await orderByPrice);
  }
  if (price == "down") {
    let drinks2 = await Drink.findAll();
    let orderByPrice = await drinks2.sort((a, b) => {
      if (a.price > b.price) {
        return 1;
      }
      if (a.price < b.price) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
    res.json(await orderByPrice);
  }
};

module.exports = Price;
