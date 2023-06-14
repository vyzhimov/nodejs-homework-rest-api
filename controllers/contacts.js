const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
} = require("../models/contacts.js");

const { HttpError, ctrlWrapper } = require("../helpers");

const getContactsList = async (req, res) => {
  const result = await listContacts();
  res.json(result);
};

const getContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await getContactById(contactId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

const addNewContact = async (req, res) => {
  // const { error } = dataValidator(req.body);
  // if (error) {
  //   throw HttpError(400, `missing field, ${error.message}`);
  // }
  console.log("insideAddNewContact");
  const result = await addContact(req.body);
  res.status(201).json(result);
};

console.log(addNewContact);

const deleteContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await removeContact(contactId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json({ message: "contact deleted" });
};

const changeContact = async (req, res) => {
  const { contactId } = req.params;
  // const { error } = dataValidator(req.body);
  // if (error) {
  //   throw HttpError(400, "missing fields");
  // }
  const result = await updateContact(contactId, req.body);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = {
  getContactsList: ctrlWrapper(getContactsList),
  getContact: ctrlWrapper(getContact),
  addNewContact: ctrlWrapper(addNewContact),
  deleteContact: ctrlWrapper(deleteContact),
  changeContact: ctrlWrapper(changeContact),
};
