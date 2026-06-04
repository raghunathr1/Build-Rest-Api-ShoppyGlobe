// Importing Files and Packages
const Product = require("../model/Product");
const mongoose = require("mongoose");

// GET all products
const getProduct = async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// GET product by id
const getProductId = async (req, res) => {
  try {
    // Validate Product ID
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        message: "Invalid Product ID",
      });
    }

    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Product Not Found",
      });
    }

    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// POST product
const createProduct = async (req, res) => {
  try {
    const { name, price } = req.body;

    // Validate required fields
    if (!name || !price) {
      return res.status(400).json({
        message: "Name and Price are required",
      });
    }

    const product = await Product.create(req.body);

    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// PUT product
const updateProduct = async (req, res) => {
  try {
    // Validate Product ID
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        message: "Invalid Product ID",
      });
    }

    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    if (!product) {
      return res.status(404).json({
        message: "Product Not Found",
      });
    }

    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// DELETE product
const deleteProduct = async (req, res) => {
  try {
    // Validate Product ID
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        message: "Invalid Product ID",
      });
    }

    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Product Not Found",
      });
    }

    res.status(200).json({
      message: "Product Deleted Successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = { getProduct, getProductId, createProduct, updateProduct, deleteProduct,};