// Importing Files and Packages
const Cart = require("../model/Cart");
const Product = require("../model/Product");
const mongoose = require("mongoose");

// POST /cart
const addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    // Check Product ID
    if (!productId) {
      return res.status(400).json({
        message: "Product ID is required",
      });
    }

    // Validate Product ID format
    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({
        message: "Invalid Product ID",
      });
    }

    // Check Quantity
    if (!quantity || quantity <= 0) {
      return res.status(400).json({
        message: "Quantity must be greater than 0",
      });
    }

    // Check Product Exists
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    const cartItem = await Cart.create({
      productId,
      quantity,
    });

    res.status(201).json(cartItem);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// PUT /cart/:id
const updateCart = async (req, res) => {
  try {

    // Validate Cart ID
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        message: "Invalid Cart ID",
      });
    }

    const { quantity } = req.body;

    // Validate Quantity
    if (!quantity || quantity <= 0) {
      return res.status(400).json({
        message: "Quantity must be greater than 0",
      });
    }

    const item = await Cart.findByIdAndUpdate(
      req.params.id,
      { quantity },
      { new: true }
    );

    if (!item) {
      return res.status(404).json({
        message: "Cart item not found",
      });
    }

    res.status(200).json(item);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// DELETE /cart/:id
const deleteCart = async (req, res) => {
  try {

    // Validate Cart ID
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        message: "Invalid Cart ID",
      });
    }

    const item = await Cart.findByIdAndDelete(req.params.id);

    if (!item) {
      return res.status(404).json({
        message: "Cart item not found",
      });
    }

    res.status(200).json({
      message: "Item removed from cart",
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { addToCart, updateCart, deleteCart};