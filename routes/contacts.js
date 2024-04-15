const express = require("express");
const router = express.Router();
const { validateContact } = require("../middleware/contactValidation");
const {
  listAllContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
} = require("../controllers/contacts");
const { isLoggedIn, isOwner } = require("../middleware/authentication");

router.route("/list").get(isLoggedIn, listAllContacts);
router.route("/get").get(isLoggedIn, isOwner, getContact);
router.route("/create").post(isLoggedIn, validateContact, createContact);
router
  .route("/update")
  .put(isLoggedIn, isOwner, validateContact, updateContact);
router.route("/delete").delete(isLoggedIn, isOwner, deleteContact);

module.exports = router;
