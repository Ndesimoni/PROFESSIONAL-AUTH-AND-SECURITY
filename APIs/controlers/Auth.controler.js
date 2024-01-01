const User = require("../model/user_model.js");
const bcryptjs = require("bcryptjs");

const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  const hashPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({ username, email, password: hashPassword });
  console.log(newUser);
  try {
    await newUser.save();
    res.status(201).json({ message: "request successful" });
  } catch (error) {
    next(error);
  }
};

module.exports = signup;
