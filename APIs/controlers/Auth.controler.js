const User = require("../model/user_model.js");
const bcryptjs = require("bcryptjs");
const errorHandler = require("../utils/error.js");
const jwt = require("jsonwebtoken");

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

const signIn = async (req, res, next) => {
  const { password, email } = req.body;

  try {
    const validateUser = await User.findOne({ email });
    if (!validateUser) return next(errorHandler(404, "User not found"));
    const validPassword = bcryptjs.compareSync(password, validateUser.password);
    if (!validPassword) return errorHandler(401, "wrong username or password");
    const token = jwt.sign({ id: validateUser._id }, process.env.JWT_SECRET);
    const { password: hashPassword, ...rest } = validateUser._doc;
    const expiryDate = new Date(Date.now(+3600000));
    res
      .cookie("access_token", token, { httpOnly: true, expires: expiryDate })
      .status(200)
      .json(rest);
    // .json({ validateUser });
  } catch (error) {
    next(error);
  }
};

module.exports = signup;
module.exports = signIn;
