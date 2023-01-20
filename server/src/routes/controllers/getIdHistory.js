const { Model } = require("sequelize")
const { Historial } = require("../../db.js")
const {Drink} = require("../../db.js")


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

module.exports = getIdHistory 