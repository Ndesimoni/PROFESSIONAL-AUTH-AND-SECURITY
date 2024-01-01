const express = require("express");

const user_controler = (req, res) => {
  res.json({ message: "request is working evrything is good " });
};

module.exports = user_controler;
