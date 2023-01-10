const { Country } = require("../../db.js");

const filterByCountry = async (req, res) => {

    const { countries } = req.query;
    let countrys = await Country.findAll();        

    if (countries) {

        let filtered = countrys.filter(e => e.id == countries)
        return res.json(filtered)

    }

        
};


module.exports = filterByCountry;

