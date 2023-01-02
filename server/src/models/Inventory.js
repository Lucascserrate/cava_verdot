const { DataTypes } = require('sequelize')


module.exports = sequelize => {
    sequelize.define('inventory', {
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        }
    })
}