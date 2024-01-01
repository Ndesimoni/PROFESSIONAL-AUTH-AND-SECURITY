const express = require("express");
const mongoose = require("mongoose");
const Dotenv = require("dotenv");
const user_Route = require("./Route/Users_route.js");
const signup = require("./Route/Auth.Route.js");

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
app.use(express.json());

app.listen(3000, () => {
  console.log("the app is listening at port 3000!");
});

app.use("/api/v1/user", user_Route);
app.use("/api/v1/auth", signup);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "internal server error";
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});
