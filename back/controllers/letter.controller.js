const asyncHandler = require('express-async-handler')
const Person = require('../models/person');

const { validationResult } = require('express-validator');

const createLetterSubscriber = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  let { name, email } = req.body;
  console.log(`this been ${name} ${email}` );


  if (!errors.isEmpty()) {
    // Validation errors
    return res.status(400).json({ errors: errors.array() });
  }

  const lettersubscriber = await Person.create({ name, email })

  res.send(lettersubscriber).status(204);


})

const readLetterSubscribers = asyncHandler(async (req, res) => {
  const lettersubscribers = await Person.find({ userType : 'letterSubscriber' })

  res.status(200).json(lettersubscribers)
})

const readLetterSubscriber = asyncHandler(async (req, res) => {
  const lettersubscriber = await Person.findById(req.params.id)

  res.status(200).json(lettersubscriber)
})


const deleteLetterSubscriber = asyncHandler(async (req, res) => {
  const lettersubscriber = await Person.findById(req.params.id)

  await Person.remove()
  res.status(200).json({id: req.params.id})
})


module.exports = {
  createLetterSubscriber,
  readLetterSubscribers,
  readLetterSubscriber,
  deleteLetterSubscriber
}
