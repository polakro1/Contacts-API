const express = require("express");
const { validateUser } = require("../middleware/userValidation");
const { register, logout, logIn } = require("../controllers/users");
const userController = require("../controllers/users");
const {
  areCredentialsVerified,
  isLoggedIn,
} = require("../middleware/authentication");
const { validateLogin } = require("../middleware/loginValidation");
const router = express.Router();

router.route("/login").post(validateLogin, areCredentialsVerified, logIn);
router.route("/logout").post(isLoggedIn, logout);
router.route("/register").post(validateUser, register);
router.route("/isLoggedIn").get(userController.isLoggedIn);

module.exports = router;
