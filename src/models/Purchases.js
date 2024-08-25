const sequelize = require("../utils/connection");
const { DataTypes } = require("sequelize");

const Purchase = sequelize.define("purchase", {});

module.exports = Purchase;
