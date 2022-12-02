const productsRouter = require('express').Router()
const {getProducts,getProductById,addProductToDB,updateProduct,deleteProduct} = require('../controllers/products');

productsRouter.get('/',getProducts);
productsRouter.get('/byId/:id',getProductById);
productsRouter.post('/add',addProductToDB);
productsRouter.put('/update/:id',updateProduct);
productsRouter.delete('/delete/:id',deleteProduct);

module.exports = productsRouter