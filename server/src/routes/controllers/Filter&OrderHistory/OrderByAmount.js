const { Historial } = require("../../../db.js");
const Amount = async (req, res) => {
  const { amountDir } = req.query;

  let amountDb = await Historial.findAll();

  if (amountDir == "up") {
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


  if (amountDir == "down") {
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

module.exports = { Amount };

