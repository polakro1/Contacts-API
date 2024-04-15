const { UserSchema } = require("../schemas/user");
const createHttpError = require("http-errors");

module.exports.validateUser = (req, res, next) => {
  const { error, value } = UserSchema.validate(req.body);
  if (error) {
    next(createHttpError(400, error));
  } else {
    req.validatedUser = value;
    next();
  }
};
