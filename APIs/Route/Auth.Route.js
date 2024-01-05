const express = require("express");
const signup = require("../controlers/Auth.controler.js");
const signIn = require("../controlers/Auth.controler.js");
// const signIn = require("")

const Router = express.Router();

Router.post("/signup", signup);
Router.post("/signin", signIn);
module.exports = Router;
