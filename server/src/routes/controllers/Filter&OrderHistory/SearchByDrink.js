const { Historial } = require("../../../db.js");

const drinkByName = async (req, res) => {


    try {

        const { name } = req.body

        console.log('soy el nombre', name);
        let historials = await Historial.findAll();
        console.log('soy el historial', historials);

        let result = historials?.filter((e) => e.name = name)
        res.send(result)
    } catch (error) {

        console.log(error.message);

    }



}

module.exports = drinkByName;
