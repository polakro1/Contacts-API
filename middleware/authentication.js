const User = require("../models/user");
const createHttpError = require("http-errors");
const Contact = require("../models/contact");
const bcrypt = require("bcrypt");

module.exports.isLoggedIn = (req, res, next) => {
  console.log(req.session.sessionID);
  if (!req.session.userId) {
    return next(createHttpError(401, "User is not logged in!"));
  } else {
    console.log("User is logged in");
    next();
  }
};

module.exports.isOwner = async (req, res, next) => {
  const contactId = req.query.id;
  const { userId } = req.session;
  const contact = await Contact.findById(contactId);
  if (!contact) {
    return next(createHttpError(404, "Contact not found"));
  }
  if (!contact.owner.equals(userId)) {
    return next(
      createHttpError(403, "You are not authorized to perform this action!"),
    );
  }
  console.log("User is the owner of the contacts");
  next();
};

module.exports.areCredentialsVerified = async (req, res, next) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) {
    return next(createHttpError(401, "Invalid credentials"));
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return next(createHttpError(401, "Invalid credentials"));
  }
  req.user = user;
  next();
};
