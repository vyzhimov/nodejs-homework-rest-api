const express = require("express");

const {
  getContactsList,
  getContact,
  addNewContact,
  deleteContact,
  changeContact,
  updateFavorite,
} = require("../../controllers/contacts");

const { validateBody, isValidId } = require("../../middlewares/");

const { schemas } = require("../../models/contact");

const router = express.Router();

router.get("/", getContactsList);

router.get("/:contactId", isValidId, getContact);

router.post("/", validateBody(schemas.addSchema), addNewContact);

router.delete("/:contactId", isValidId, deleteContact);

router.put(
  "/:contactId",
  isValidId,
  validateBody(schemas.addSchema),
  changeContact
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  updateFavorite
);

module.exports = router;
