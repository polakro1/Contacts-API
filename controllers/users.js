const bcrypt = require("bcrypt");
const User = require("../models/user");
const { save } = require("debug");
const createHttpError = require("http-errors");

module.exports.logIn = async (req, res) => {
  const userId = req.user._id;
  req.session.userId = userId;
  console.log("Login successful");
  res.status(200).json(userId);
};

module.exports.register = async (req, res, next) => {
  const { username, password, email } = req.validatedUser;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ username, password: hashedPassword, email });
  try {
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    next(createHttpError(400, error));
  }
};

module.exports.logout = (req, res, next) => {
  console.log("deleting session cookie");
  req.session.userId = null;
  req.session.save((err) => {
    if (err) {
      next(err);
    }
    req.session.regenerate((err) => {
      if (err) {
        next(err);
      }
      res.status(200).json();
    });
  });
};

module.exports.isLoggedIn = (req, res) => {
  if (req.session.userId) {
    console.log("user is logged in");
    res.json({ isLoggedIn: true });
  } else {
    console.log("User is not logged in");
    res.json({ isLoggedIn: false });
  }
};
