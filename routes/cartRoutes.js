// Importing Files and Packages
const express = require("express");
const router = express.Router();

const { addToCart, updateCart, deleteCart} = require("../controllers/cartController");

const protect = require("../middleware/authMiddleware");

// Protected Cart Routes
router.post("/", protect, addToCart);
router.put("/:id", protect, updateCart);
router.delete("/:id", protect, deleteCart);

module.exports = router;