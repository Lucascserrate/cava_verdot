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
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: /^[a-záéíóúäëïöü]*$/i,
        },
      },
      surname: {
        type: DataTypes.STRING,
        validate: {
          is: /^[a-záéíóúäëïöü]*$/i,
        },
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 18,
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        validate: {
          isUrl: true,
        },
        defaultValue:
          "https://img2.freepng.es/20180325/wlw/kisspng-computer-icons-user-profile-avatar-5ab7528676bb25.9036280415219636544863.jpg",
        allowNull: false,
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false,
      },
    },
    {
      createdAt: false,
      updatedAt: false,
    }
  );
};
