const createHttpError = require("http-errors");
const { LoginSchema } = require("../schemas/login");

module.exports.validateLogin = (req, res, next) => {
  const { error, value } = LoginSchema.validate(req.body);
  if (error) {
    next(createHttpError(400, error));
  } else {
    req.validatedLogin = value;
    next();
  }
};
