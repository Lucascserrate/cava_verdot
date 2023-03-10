const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "drink",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        //primaryKey: true       
        // foreignKey: true
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      rating: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      avalible: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      createdAt: false,
      updatedAt: false,
    }
  );
};
