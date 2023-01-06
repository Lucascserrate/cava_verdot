const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "country",
    {
      country: {
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
