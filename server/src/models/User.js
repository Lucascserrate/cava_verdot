const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.INTEGER,
        unique: true,
        primaryKey: true,
        autoIncrement: true,
      },
      name:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      surname:{
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      passord:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      address:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.BOOLEAN,
      }
    },
    {
      createdAt: false,
      updatedAt: false,
    }
  );
};
