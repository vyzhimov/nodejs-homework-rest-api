const express = require("express");

const {
  getContactsList,
  getContact,
  addNewContact,
  deleteContact,
  changeContact,
} = require("../../controllers/contacts");

const { validateBody } = require("../../middlewares/");

const schemas = require("../../schemas/contacts");

const router = express.Router();

router.get("/", getContactsList);

router.get("/:contactId", getContact);

router.post("/", validateBody(schemas.addSchema), addNewContact);

router.delete("/:contactId", deleteContact);

router.put("/:contactId", validateBody(schemas.addSchema), changeContact);

module.exports = router;
