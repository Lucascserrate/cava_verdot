const { DataTypes } = require('sequelize')
const User = require("./User.js");
const Drink = require("./Drink");


module.exports = (sequelize) => {
  sequelize.define(
    "historial",
    {
      userId: {
        type: DataTypes.STRING,
        allowNull: false,
        // primaryKey: true,
        foreignKey: true

        
        // refereces: {
        //   model: User,
        //   key: "id",
        // }

      },

      drinkId: {
        type: DataTypes.STRING,
        allowNull: false,
        foreignKey: true

        // refereces: {
        //   model: Drink,
        //   key: "name",
        // }
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false,

      },


      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,

      },

      subtotal: {
        type: DataTypes.FLOAT,
        allowNull: false,

      }

    }

  );
}

