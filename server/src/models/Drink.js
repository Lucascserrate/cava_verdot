const { DataTypes } = require('sequelize')


module.exports = sequelize => {
    sequelize.define('drink', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    })
}