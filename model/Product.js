// Importing packages
const mongoose = require("mongoose");

// Create Schema and Module for Product
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  price: {
    type: Number,
    required: true
  },

  description: String,

  stockQuantity: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model("Product", productSchema);