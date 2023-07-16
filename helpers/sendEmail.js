const nodemailer = require("nodemailer");
require("dotenv").config();

const { GMAIL_EMAIL, GMAIL_PASSWORD } = process.env;

const nodemailerConfig = {
  service: "gmail",
  auth: {
    user: GMAIL_EMAIL,
    pass: GMAIL_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  const email = { ...data, from: GMAIL_EMAIL };

  transport
    .sendMail(email)
    .then(() => console.log("Email send success"))
    .catch((error) => console.log(error.message));

  return true;
};

module.exports = sendEmail;
