const sequelize = require("../config/dbconfig");

const { DataTypes } = require("sequelize");

const User = sequelize.define(
  "User",
  {
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  },
);

module.exports = User;
