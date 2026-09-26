const express = require("express");
const app = express();
const products =[
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
// GET all products
app.get("/api/products",(req,res)=> {
    res.json(products);
})
app.get("/",(req,res) => {
    res.send("Welcome to our E-Commerce Backend");
})
// GET single product
app.get("/api/products/:id",(req,res) => {
    const productId = Number(req.params.id);
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
app.listen(5000 , () => {
    console.log("Server running on http://localhost/5000");
})