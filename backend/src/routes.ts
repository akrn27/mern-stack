import express from "express";
import { createProduct, deleteProduct, getAllProducts, getProduct, updateProduct } from "./controllers/products.controller";
import { single } from "./middleware/upload.middleware";

const router = express.Router();

router.post('/product', single, createProduct);
router.get('/product', getAllProducts);
router.get('/product/:id', getProduct);
router.put('/product/:id', updateProduct);
router.delete('/product/:id', deleteProduct)

export default router;