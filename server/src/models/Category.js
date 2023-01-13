const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define(
    "category",
    {
      id: {
        type: DataTypes.INTEGER,
        unique: true,
        primaryKey: true,
        autoIncrement: true,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
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
