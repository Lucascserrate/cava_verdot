const { DataTypes } = require('sequelize')
const User = require("./User.js");
const Drink = require("./Drink");


module.exports = (sequelize) => {
  sequelize.define(
    "historial",
    {


      nameUser: {
        type: DataTypes.STRING,
        

      },
      surname: {
        type: DataTypes.STRING,    


      },
      email: {
        type: DataTypes.STRING,
      },

      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true
      },

      drinkId: {
        type: DataTypes.STRING,
        allowNull: false,
        foreignKey: true    
      },

      buys: {
        type: DataTypes.ARRAY(
          DataTypes.STRING
        ),
        allowNull: false,
      },


      amount: {
        type: DataTypes.ARRAY(
          DataTypes.STRING
        ),
        allowNull: false,

      },

      subtotal: {
        type: DataTypes.FLOAT,
        allowNull: false,

      }

    }

  );
}

