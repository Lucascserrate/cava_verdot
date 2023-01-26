const { Historial } = require("../../db.js")
const { Drink } = require("../../db.js")
const {Op} = require("sequelize")

const getHistory = async (req, res) => {

    const result = await Historial.findAll()

    res.send(result)

}

const getIdHistory = async (id) => {

    return await Historial.findAll({
        where: {
            userId: parseInt(id)

        },

        include: {
            model: Drink,
            attributes: ['name', 'price'],
            through: {
                attributes: []
            }
        }
    })


}
const getNameHistory = async (name) => {

    return await Historial.findAll({
        where: {
            
            nameUser: {
                [Op.iLike]: name
        }
    },

        include: {
            model: Drink,
            attributes: ['name', 'price'],
            through: {
                attributes: []
            }
        }
    })
}



module.exports = { getIdHistory, getHistory, getNameHistory }

