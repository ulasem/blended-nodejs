import { Router } from 'express';
import { celebrate } from 'celebrate';
import {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProduct,
  updateProduct,
} from '../controllers/productsController.js';

const productsRoutes = Router();

productsRoutes.get('/products', getAllProducts);
productsRoutes.get('/products/:productId', getProductById);
productsRoutes.post('/products', createProduct);
productsRoutes.delete('/products/:productId', deleteProduct);
productsRoutes.patch('/products/:productId', updateProduct);

export default productsRoutes;
