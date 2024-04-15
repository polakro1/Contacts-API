const Joi = require("joi");
const phoneJoi = Joi.extend(require("joi-phone-number"));

module.exports.createContactSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  tel: phoneJoi.string().required().phoneNumber(),
  email: Joi.string().email().allow(""),
});

module.exports.updateContactSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  tel: phoneJoi.string().required().phoneNumber(),
  email: Joi.string().email().allow(""),
});
