const express = require("express");
const app = express();
// Middleware 1: JSON Parser
app.use((req,res,next) => {
    console.log("MiddleWare Executed");
    next();
})
// Home Route
app.get("/",(req,res) => {
    res.send("Welcome to our E-Commerce Backend");
})
// GET All Products
app.get("/api/products",(req,res) => {
    res.json=[
        {
        id:1,
        name:"Laptops",
        price:70000
    },
    {
        id:2,
        name:"SmartPhones",
        price:35000
    },
    {
        id:3,
        name:"HeadPhones",
        price:1500
    }];
})

// GET single product
app.get("/api/products/:id", (req, res) => {
    const productId = Number(req.params.id);
    const products = [
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
    ];
    const product = products.find(
        product => product.id === productId
    );
    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }
    res.json(product);
});
// POST Create Product
app.post("/api/products", (req, res) => {

    console.log("Received Product:");
    console.log(req.body);

    res.status(201).json({
        message: "Product received successfully",
        product: req.body
    });

});
// Start Server
app.listen(5000 , () => {
    console.log("Server running on http://localhost/5000");
})