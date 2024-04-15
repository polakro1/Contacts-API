const {
  createContactSchema,
  updateContactSchema,
} = require("../schemas/contact");
const Joi = require("joi");
const createHttpError = require("http-errors");

module.exports.validateContact = (req, res, next) => {
  let schemaToUse;
  if (req.method === "POST") {
    schemaToUse = createContactSchema;
  } else if (req.method === "PUT") {
    schemaToUse = updateContactSchema;
  }

  const { error, value } = schemaToUse.validate(req.body);
  if (error) {
    throw createHttpError(400, error);
  } else {
    req.validatedContact = value;
    next();
  }
};
