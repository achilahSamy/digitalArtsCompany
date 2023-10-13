const { body } = require('express-validator');

const validate = (method) => {
  switch (method) {
    case 'handleLetterRegistration': {
      return [
        body('name')
          .not()
          .isEmpty()
          .withMessage('Name is required')
          .trim()
          .escape(),
        body('email')
          .not()
          .isEmpty()
          .withMessage('E-mail is required')
          .isEmail()
          .withMessage('Please insert a valid e-mail')
          .normalizeEmail()
      ];
    }
    case 'handleMail': {
      return [
        body('name')
          .not()
          .isEmpty().withMessage('Please add your name'),
        body('email')
          .not()
          .isEmpty().withMessage('Please add your email')
          .isEmail()
          .withMessage('Invalid e-mail')
          .normalizeEmail(),
         body('tel')
          .not()
          .isEmpty()
          .withMessage('Please add your phone number')
          .isMobilePhone().withMessage('Invalid Phone number'),
        body('message')
          .not()
          .isEmpty()
          .withMessage('Please add your message'),
      ];
    }
  }
};

module.exports = { validate };
