const express = require("express");
const router = express.Router();
const {
    getProducts,
    getProductById,
    createProduct
} = require("../Controllers/productController")
// GET all products
router.get(("/",getProducts));
// GET single product
router.get("/:id", getProductById);
// POST product
router.post("/", createProduct);
module.exports = router;