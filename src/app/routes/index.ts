import express from 'express';
import { ProductRoutes } from '../modules/Product/product.route';
import { SalesRoutes } from '../modules/Sales/sales.route';
import { UserRoutes } from '../modules/User/user.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/',
    route: ProductRoutes,
  },
  {
    path: '/',
    route: SalesRoutes,
  },
  {
    path: '/',
    route: UserRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
