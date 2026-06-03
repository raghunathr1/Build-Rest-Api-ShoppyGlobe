const express = require("express");
const router = express.Router();
const {addToCart, updateCart, deleteCart} = require("../controllers/cartController");

router.post("/", addToCart);
router.put("/:id", updateCart);
router.delete("/:id", deleteCart);

module.exports = router;