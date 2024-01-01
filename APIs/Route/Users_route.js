const express = require("express");
const user_controler = require("../controlers/user_controler.js");
const Route = express.Router();

Route.get("/", user_controler);

module.exports = Route;
