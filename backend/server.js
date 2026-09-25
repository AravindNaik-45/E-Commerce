const express = require("express");
const app = express();
const products =[
    {
        id:1,
        name:"Laptop",
        price:60000
    },
    {
        id:2,
        name:"SmartPhone",
        price:30000
    }
];
app.get("/",(req,res) => {
    res.send("Welcome to our E-Commerce Backend");
})
app.get("/api/products",(req,res) => {
    res.json("Here all the products");
})
app.listen(5000 , () => {
    console.log("Server running on http://localhost/5000");
})