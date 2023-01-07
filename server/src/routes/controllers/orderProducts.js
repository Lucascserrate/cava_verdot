const { Drink } = require("../../db.js");
const orderDesc = async (req, res) => {
    const { direction } = req.query;


    if (direction == "desc") {

        let drinks3 = await Drink.findAll();
        let orderByName = await drinks3.sort((a, b) => {

            if (a.name < b.name) return 1;
            if (a.name > b.name) return -1;
            return 0;
        }
        )
        res.json(orderByName);
    }

    if (direction == "asc") {
        let drinks3 = await Drink.findAll();
        let orderByName = await drinks3.sort((a, b) => {

            if (a.name > b.name) return 1;
            if (a.name < b.name) return -1;
            return 0;
        }
        )
        res.json(orderByName);
    }

};


module.exports = { orderDesc }

