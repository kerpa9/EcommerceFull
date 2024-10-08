const sequelize = require("../utils/connection");
const { DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

const User = sequelize.define("users", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },

  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  celphone: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

User.beforeCreate(async (user) => {
  const password = user.password,
    hashPassword = await bcrypt.hash(password, 10);
  user.password = hashPassword;
});

module.exports = User;
