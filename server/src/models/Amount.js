const { DataTypes } = require('sequelize')


module.exports = sequelize => {
    sequelize.define('amount', {
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    })
}