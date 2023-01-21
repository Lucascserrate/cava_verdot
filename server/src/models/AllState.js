const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define(
    "AllState",
    {
      id: {
        type: DataTypes.INTEGER,
        unique: true,
        primaryKey: true,
        autoIncrement: true,
      },
      id_country: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      createdAt: false,
      updatedAt: false,
    }
  );
};
