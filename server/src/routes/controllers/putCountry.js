const { Country } = require("../../db.js")
const putCountry = async (req, res) => {
    try {
        const { countryId } = req.query

        const { country } = req.body

        const countryUp = await Country.update({
            country: country
        }, {
            where: { id: countryId }
        })

        res.status(200).json(await "The country was Updated")

    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

module.exports = putCountry;