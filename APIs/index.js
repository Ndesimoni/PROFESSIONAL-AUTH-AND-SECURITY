const express = require("express");
const mongoose = require("mongoose");
const Dotenv = require("dotenv");

Dotenv.config();
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("data base connected");
  })
  .catch((error) => {
    console.log(error);
  });

const app = express();

app.listen(3000, () => {
  console.log("the app is listening at port 3000!");
});
