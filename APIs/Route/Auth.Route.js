const express = require("express");
const signup = require("../controlers/Auth.controler.js");

const Router = express.Router();

Router.post("/signup", signup);

module.exports = Router;
