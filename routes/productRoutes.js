const express = require('express')
const router = express.Router()

const {
    getProduct,
    getProductId,
    createProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/productController')

router.get("/", getProduct)
router.get("/:id", getProductId)

router.post("/", createProduct)
router.put("/:id", updateProduct)
router.delete("/:id", deleteProduct)

module.exports = router