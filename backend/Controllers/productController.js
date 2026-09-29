const products = [
    {
        id:1,
        name:"Laptop",
        price:65000
    },
    {
        id:2,
        name:"Smartphone",
        price:35000
    }
];
//Get all products 
const getProducts = (req,res) => {
    res.json(products);
};
// Get single product
const getProductById = (req,res) => {
    const productId = Number(req.params.id);
    const product = products.find(
        product == product.id == productId
    );
    if(!product){
        return res.status(404).json({
            message: "Product not found"
        });
    }
    res.json(product);
};
// Create product
const createProduct = (req,res) => {
    const product = req.body;
    res.status(201).json({
        message: "Product created successfully",
        product:product
    });
};
module.exports = {
    getProducts,getProductById,createProduct
};