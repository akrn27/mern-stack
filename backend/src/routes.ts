import express from 'express';
import { createProduct, deleteProduct, getAllProducts, getProduct, updateProduct } from './controllers/products.controller';
import { createCategory, getAllCategories, getCategory, updateCategory } from './controllers/category.controller';
import { single } from './middlewares/upload.middleware';

const router = express.Router();

// Products route
router.post('/product', single, createProduct);
router.get('/product', getAllProducts);
router.get('/product/:id', getProduct);
router.put('/product/:id', updateProduct);
router.delete('/product/:id', deleteProduct);

// Category route
router.post('/category', createCategory);
router.get('/category', getAllCategories);
router.get('/category/:id', getCategory);
router.put('/category/:id', updateCategory);
router.delete('/category/:id', deleteProduct);

export default router;