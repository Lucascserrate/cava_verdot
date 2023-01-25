const { Historial } = require("../../db.js");
const Amount = async (req, res) => {
  const { amount } = req.query;
  if (amount == "up") {
    let amountDb = await Historial.findOne({
        include: {
            name : name,
        }
    });
    
    let orderByAmount = await amountDb.sort((a, b) => {
      if (a.amount < b.amount) {
        return 1;
      }
      if (a.amount > b.amount) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
    res.json(await orderByAmount);
  }
  if (amount == "down") {
    let amountDb = await Historial.findAll();
    let orderByAmount = await amountDb.sort((a, b) => {
      if (a.amount > b.amount) {
        return 1;
      }
      if (a.amount < b.amount) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
    res.json(await orderByAmount);
  }
};

module.exports = {Amount};

