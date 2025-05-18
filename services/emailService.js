const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const sendEmail = async ({ recipient, title, message }) => {
  await transporter.sendMail({
    from: `"Notifier" <${process.env.EMAIL_USER}>`,
    to: recipient,
    subject: title,
    text: message
  });
};

module.exports = sendEmail;
