// src/routes/studentsRoutes.js

import { Router } from 'express';
import { celebrate } from 'celebrate';
import {
  getProducts,
  getProductById,
  createProduct,
  deleteProduct,
  updateProduct,
} from '../controllers/productsController.js';
import {
  createProductSchema,
  getProductsSchema,
  productIdParamSchema,
  updateProductSchema,
} from '../validations/productsValidation.js';

const productsRoutes = Router();

productsRoutes.get('/products', celebrate(getProductsSchema), getProducts);
productsRoutes.get(
  '/products/:productId',
  celebrate(productIdParamSchema),
  getProductById,
);
productsRoutes.post('/products', celebrate(createProductSchema), createProduct);
productsRoutes.delete(
  '/products/:productId',
  celebrate(productIdParamSchema),
  deleteProduct,
);
productsRoutes.patch(
  '/products/:productId',
  celebrate(updateProductSchema),
  updateProduct,
);

export default productsRoutes;
