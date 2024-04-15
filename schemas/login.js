const Joi = require("joi");

module.exports.LoginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});
