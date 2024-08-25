const sequelize = require("../utils/connection"),
  { DataTypes } = require(sequelize);

const Cart = sequelize.define("cart", {});

module.exports = Cart;
