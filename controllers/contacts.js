const { Contact } = require("../models/contact");

const { HttpError, ctrlWrapper } = require("../helpers");

const getContactsList = async (req, res) => {
  const result = await Contact.find();

  res.json(result);
};

const getContact = async (req, res) => {
  const { contactId } = req.params;

  const result = await Contact.findById(contactId);
  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.json(result);
};

const addNewContact = async (req, res) => {
  const result = await Contact.create(req.body);

  res.status(201).json(result);
};

const changeContact = async (req, res) => {
  const { contactId } = req.params;

  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.json(result);
};

const updateStatusContact = async (req, res) => {
  const { contactId } = req.params;

  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.json(result);
};

const deleteContact = async (req, res) => {
  const { contactId } = req.params;

  const result = await Contact.findByIdAndRemove(contactId);
  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.json({ message: "contact deleted" });
};

module.exports = {
  getContactsList: ctrlWrapper(getContactsList),
  getContact: ctrlWrapper(getContact),
  addNewContact: ctrlWrapper(addNewContact),
  changeContact: ctrlWrapper(changeContact),
  updateStatusContact: ctrlWrapper(updateStatusContact),
  deleteContact: ctrlWrapper(deleteContact),
};
