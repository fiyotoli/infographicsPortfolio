import express from 'express'
import { listProducts, addProduct, getProductById, getRelatedProducts } from '../controllers/productController.js'
import upload from '../middleware/multer.js';
 // Adjust the path based on your structure


const productRouter = express. Router();
productRouter.post('/add',upload.single('image'), addProduct); 
// productRouter.post('/remove',adminAuth, removeProduct);
// productRouter.post('/single', singleProduct); 
productRouter.get('/list', listProducts);
 
productRouter.get('/:id', getProductById);  // Route to get product by ID
// Get products by category
productRouter.get('/related/:category',getRelatedProducts);
  
  
export default productRouter