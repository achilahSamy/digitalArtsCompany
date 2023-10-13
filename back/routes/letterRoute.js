const express = require('express');
const router = express.Router();


const { validate } = require('../middleware/validator.middleware');

const {
  handleLetterRegistration,
  getAllLetterSubscribers,
  getLetterSubscriber,
  createLetterSubscriber,
  deleteLetterSubscriber
 } = require('../controllers/letter.controller');


router.get('/newslettersubscriber', (req, res) => {
  res.send("This must work!");
});

router.post('/newslettersubscriber', validate('handleLetterRegistration'), createLetterSubscriber);

module.exports = router;
