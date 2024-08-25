require("../models");
const sequelize = require("../utils/connection");
const userCreate = require("./createData/userCreate");

const testMigrate = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log("DB Reset 🤷‍♂️😁");
    await userCreate();
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

testMigrate();
