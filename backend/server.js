const express = require("express");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const app = express();
// Connect MongoDB
connectDB();
// Middleware 1: JSON Parser
app.use(express.json());
// Logger middleware
app.use((req,res,next) => {
    console.log(req.method,req.url);
    next();
})
// Product routes
app.use("/api/products",productRoutes);
// Home Route
app.get("/",(req,res) => {
    res.send("Welcome to our E-Commerce Backend");
})
// Start Server
app.listen(5000 , () => {
    console.log("Server running on http://localhost/5000");
})