const { DataTypes, Drink, User } = require("sequelize");
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
      drinkId: {
        type: DataTypes.INTEGER,
        refereces: {
          model: Drink,
          key: "id",
        },
      },
      userId: {
        type: DataTypes.INTEGER,
        refereces: {
          model: User,
          key: "id",
        },
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
