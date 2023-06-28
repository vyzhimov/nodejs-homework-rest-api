const express = require("express");

const {
  getContactsList,
  getContact,
  addNewContact,
  deleteContact,
  changeContact,
  updateStatusContact,
} = require("../../controllers/contacts");

const { validateBody, isValidId, authenticate } = require("../../middlewares/");

const { schemas } = require("../../models/contact");

const router = express.Router();

router.get("/", authenticate, getContactsList);

router.get("/:contactId", authenticate, isValidId, getContact);

router.post("/", authenticate, validateBody(schemas.addSchema), addNewContact);

router.delete("/:contactId", authenticate, isValidId, deleteContact);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  validateBody(schemas.addSchema),
  changeContact
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  updateStatusContact
);

module.exports = router;
