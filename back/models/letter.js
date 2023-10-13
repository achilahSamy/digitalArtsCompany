const mongoose = require('mongoose');

const letterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please name the product']
  },
  thumbnail: {
    type: String,
    required: [true, 'Please add the product image']
  },
  description: {
    type: String,
    required: [true, 'Please describe the product']
  },
  images: {
    type: Array,
    required: [true, 'Please add product description images']
  },
  price: {
    type: Number,
    required: [true, 'Please add the product price']
  },
  countinstock: {
    type: Number,
    required: [true, 'Please include the number of products in stock']
  }
},
{
  timestamps: true,
});

const Product = mongoose.model('product', productSchema);

module.exports = Product;
