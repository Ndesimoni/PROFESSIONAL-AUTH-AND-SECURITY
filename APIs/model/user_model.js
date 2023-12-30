const mongoose = require("mongoose");

const user_model = mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  { timeStamp: true }
);

const User = new mongoose.Schema("User", user_model);

module.exports = User;
