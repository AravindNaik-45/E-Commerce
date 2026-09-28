const express = require("express");
const router = express.Router();
// GET all products
router.get("/", (req, res) => {
    res.json([
        {
            id: 1,
            name: "Laptop",
            price: 60000
        },
        {
            id: 2,
            name: "Smartphone",
            price: 30000
        }
    ]);
});
// GET single product
router.get("/:id", (req, res) => {
    const productId = Number(req.params.id);
    res.json({
        message: `You requested product ${productId}`
    });
});
// POST product
router.post("/", (req, res) => {
    res.status(201).json({
        message: "Product created",
        product: req.body
    });
});
module.exports = router;