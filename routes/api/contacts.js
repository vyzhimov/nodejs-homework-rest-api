const express = require("express");

const {
  getContactsList,
  getContact,
  addNewContact,
  deleteContact,
  changeContact,
} = require("../../controllers/contacts");

const router = express.Router();

router.get("/", getContactsList);

router.get("/:contactId", getContact);

router.post("/", addNewContact);

router.delete("/:contactId", deleteContact);

router.put("/:contactId", changeContact);

module.exports = router;
