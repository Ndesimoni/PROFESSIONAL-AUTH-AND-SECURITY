const User = require("../model/user_model.js");
// const bcryptjs = require("bcryptjs");

const signup = async (req, res) => {
  const { username, email, password } = req.body;

  //password hashing with bcrypt not implimented so, we would look at the code again
  // const hashPassword = bcrypt.hashSync(password, 10);

  const newUser = new User({ username, email, password });
  console.log(newUser);
  try {
    await newUser.save();
    res.status(201).json({ message: "request successful" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = signup;
