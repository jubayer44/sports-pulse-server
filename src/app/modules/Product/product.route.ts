import express from 'express';
import { ProductController } from './product.controller';
import checkAuth from '../../middlewares/checkAuth';

const router = express.Router();

router.get('/products', checkAuth('user'), ProductController.getAllProduct);

router.get(
  '/product/:id',
  checkAuth('user'),
  ProductController.getSingleProduct,
);

router.post('/product', checkAuth('user'), ProductController.addProduct);

router.delete(
  '/product/:id',
  checkAuth('user'),
  ProductController.deleteProduct,
);

router.patch(
  '/product/:id',
  checkAuth('user'),
  ProductController.updateProduct,
);

router.delete(
  '/products',
  checkAuth('user'),
  ProductController.deleteMultipleProduct,
);

router.get(
  '/products/values',
  checkAuth('user'),
  ProductController.getProductsValues,
);

router.get(
  '/products-users',
  checkAuth('user'),
  ProductController.getProductsAndUsersCount,
);

export const ProductRoutes = router;
