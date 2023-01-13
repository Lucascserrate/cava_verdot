const { Drink } = require("../../db.js");
const Rating = async (req, res) => {
  const { rating } = req.query;
  if (rating == "up") {
    let drinks2 = await Drink.findAll();
    
    let orderByRating = await drinks2.sort((a, b) => {
      if (a.rating < b.rating) {
        return 1;
      }
      if (a.rating > b.rating) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
    res.json(await orderByRating);
  }
  if (rating == "down") {
    let drinks2 = await Drink.findAll();
    let orderByRating = await drinks2.sort((a, b) => {
      if (a.rating > b.rating) {
        return 1;
      }
      if (a.rating < b.rating) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
    res.json(await orderByRating);
  }
};

module.exports = Rating;