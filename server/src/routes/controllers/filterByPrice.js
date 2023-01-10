const { Drink } = require("../../db.js");

const filterByPrice = async (req, res) => {

    const { price } = req.query;
    let drinks = await Drink.findAll();

    if (price === 'menor a 100') {

        let filtered = drinks.filter(e => e.price <= 100)
        return res.json(filtered)

    }

    if (price === 'de 100 a 300') {

        let filtered = drinks.filter(e => e.price > 100 && e.price <= 300)
        return res.json(filtered)

    }

    if (price === 'de 300 a 500') {

        let filtered = drinks.filter(e => e.price > 300 && e.price <= 500)
        return res.json(filtered)
        
    }
    
};

module.exports = filterByPrice;