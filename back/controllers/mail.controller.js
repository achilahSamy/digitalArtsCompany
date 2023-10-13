const asyncHandler = require('express-async-handler')
const nodemailer = require('nodemailer');
const config = require('../config/mail.js');

const { validationResult } = require('express-validator');


// transporter object
const transporter = nodemailer.createTransport({
  host: config.host,
  port: config.port,
  secure: true,
  auth: {
    user: config.user,
    pass: config.pass
  },
  tls: {
    rejectUnauthorized: false
  }
});


const contactFormMail = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  let { name, email, tel, message } = req.body;

  console.log(name, email, tel, message);

  if (!errors.isEmpty()) {
    // Validation errors
    return res.status(400).json({ errors: errors.array() });
  }

  const output = `
        <p>You have a message</p>
        <h3>Contact Details</h3>
        <p>Name: ${req.body.name}</p>
        <p>Email: ${req.body.email}, Phone no.: ${req.body.tel}</p>
        <h3>Message</h3>
        <p>${req.body.message}</p>
    `;

  const mailDetails = {
    from: config.from,
    to: config.to,
    subject: config.subject,
    html: output
  };

  transporter.sendMail(mailDetails, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    res.send('Thanks for hollaring').status(204);

  });

})

module.exports = {
  contactFormMail
}
