const { DataTypes } = require("sequelize");
const User = require("./User.js");
const Drink = require("./Drink.js");
module.exports = (sequelize) => {
  sequelize.define(
    "ShopingCart",
    {
      id: {
        type: DataTypes.INTEGER,
        unique: true,
        primaryKey: true,
        autoIncrement: true,
      },
      drinkId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        refereces: {
          model: Drink,
          key: "id",
        },
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        refereces: {
          model: User,
          key: "id",
        },
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      createdAt: true,
      updatedAt: true,
    }
  );
};
