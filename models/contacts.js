const fs = require("fs/promises");
const { nanoid } = require("nanoid");
const path = require("path");

const contactsPath = path.join(__dirname, "contacts.json");

const listContacts = async () => {
  const contacts = await fs.readFile(contactsPath);
  return JSON.parse(contacts);
};

const getContactById = async (contactId) => {
  const contactsList = await listContacts();

  const result = contactsList.find((contact) => contact.id === contactId);

  return result || null;
};

const removeContact = async (contactId) => {
  const contactsList = await listContacts();

  const index = contactsList.findIndex((contact) => contact.id === contactId);

  if (index === -1) {
    return null;
  }

  const [result] = contactsList.splice(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contactsList, null, 2));
  return result;
};

const addContact = async (body) => {
  const contactsList = await listContacts();
  const newContact = { id: nanoid(), ...body };
  contactsList.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contactsList, null, 2));
  return newContact;
};

const updateContact = async (contactId, body) => {
  const contactList = await listContacts();
  const index = contactList.findIndex((contact) => contact.id === contactId);

  if (index === -1) {
    return null;
  }

  contactList[index] = { id: contactId, ...body };
  await fs.writeFile(contactsPath, JSON.stringify(contactList, null, 2));
  return contactList[index];
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
