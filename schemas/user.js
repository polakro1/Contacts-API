const Joi = require("joi");
const mongoose = require("mongoose");

module.exports.UserSchema = Joi.object({
  _id: mongoose.Schema.Types.ObjectId,
  username: Joi.string().required().min(6),
  email: Joi.string().email().required(),
  password: Joi.string().required().min(6),
  passwordRepeat: Joi.string().required().valid(Joi.ref("password")),
});
