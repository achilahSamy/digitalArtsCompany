const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

const config = require('../config/mail.js');

const { validate } = require('../middleware/validator.middleware');

const {
  contactFormMail
} = require('../controllers/mail.controller');

router.get('/mail', (req, res) => {
  console.log('Message Received');

  res.send("The email Route!");
});

router.post('/mail', validate('handleMail'), contactFormMail);


module.exports = router;
