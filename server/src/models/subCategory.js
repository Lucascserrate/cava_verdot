const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "subCategory",
    {
      subCategory: {
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
