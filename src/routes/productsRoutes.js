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

const router = Router();

router.get('/products', celebrate(getProductsSchema), getProducts);
router.get(
  '/products/:productId',
  celebrate(productIdParamSchema),
  getProductById,
);
router.post('/products', celebrate(createProductSchema), createProduct);
router.delete(
  '/products/:productId',
  celebrate(productIdParamSchema),
  deleteProduct,
);
router.patch(
  '/products/:productId',
  celebrate(updateProductSchema),
  updateProduct,
);

export default router;
