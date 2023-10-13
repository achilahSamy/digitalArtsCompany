const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  userType: {
    type: String,
    enum : ['letterSubscriber','client','admin','staff'],
    default: 'letterSubscriber'
  },
  name: {
    type: String,
    required: [true, 'Please add your name']
  },
  email: {
    type: String,
    required: [true, 'Please add your email'],
    unique:true
  },
  phonenumber: {
    type: Number,
    sparse: true
  },
  password: {
    type: String
  }
},
  {  timestamps: true }
);

const Person = mongoose.model('Person', personSchema);

module.exports = Person;
