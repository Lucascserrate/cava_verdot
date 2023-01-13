const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "country",
    {
      id: {
        type: DataTypes.INTEGER,
        unique: true,
        primaryKey: true,
        autoIncrement: true,
      },
      country: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      avalible:{
        type: DataTypes.BOOLEAN,
        defaultValue:true
      }
    },
    {
      createdAt: false,
      updatedAt: false,
    }
  );
};
