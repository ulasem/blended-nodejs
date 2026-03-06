import express from 'express';
import { getAllProducts } from '../controllers/products.js';
import {
  createProduct,
  deleteProduct,
  updateProduct,
} from '../controllers/productsController.js';

const router = express.Router();

router.get('/products', getAllProducts);
router.post('/products', createProduct);
router.patch('/products/:productId', updateProduct);
router.delete('/products/:productId', deleteProduct);

export default router;
