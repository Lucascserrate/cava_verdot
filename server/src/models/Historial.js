const { DataTypes } = require('sequelize')
const User = require("./User.js");
const Drink = require("./Drink");


module.exports = (sequelize) => {
  sequelize.define(
    "historial",
    {


      nameUser: {
        type: DataTypes.STRING,
        allowNull: false,
        foreignKey: true


      },
      surname: {
        type: DataTypes.STRING,        
        foreignKey: true


      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        foreignKey: true


      },

      userId: {
        type: DataTypes.STRING,
        allowNull: false,
        foreignKey: true


      },

      drinkId: {
        type: DataTypes.STRING,
        allowNull: false,
        foreignKey: true    
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

