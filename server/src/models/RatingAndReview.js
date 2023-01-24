const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define(
    "ratingAndReview",
    {
      id: {
        type: DataTypes.INTEGER,
        unique: true,
        primaryKey: true,
        autoIncrement: true,
      },
      review: {
        type: DataTypes.STRING,
      },
      punctuation: {
        type: DataTypes.INTEGER,
        validate: {
          max: 5,
          min: 0,
        },
      },
    },
    {
      createdAt: true,
      updatedAt: true,
    }
  );
};
