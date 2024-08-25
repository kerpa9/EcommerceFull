const express = require("express");
const { create, getAll, login } = require("../controllers/users.controller");
const { verifyJwt } = require("../utils/verifyJWT");

const routerUser = express.Router();

routerUser.route("/").get(verifyJwt, getAll).post(create);
routerUser.route("/login").post(login);

module.exports = routerUser;
