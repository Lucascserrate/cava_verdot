const { Historial } = require("../../db.js")
const {Drink} = require("../../db.js")

const getHistory = async(req, res) =>{

    const result = await Historial.findAll()

    res.send(result)

}

const getIdHistory = async (id) => {

    return await Historial.findAll({
        where: {
            userId: id

        },

        include:{
            model: Drink,
            attributes: ['name', 'price'],
            through: {
                attributes: []
            }
        }
    })


}

module.exports = {getIdHistory, getHistory} 

