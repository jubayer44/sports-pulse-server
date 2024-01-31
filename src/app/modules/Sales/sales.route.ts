import express from 'express';
import { SalesController } from './sales.controller';
import checkAuth from '../../middlewares/checkAuth';

const router = express.Router();

router.get('/sales', checkAuth('user'), SalesController.getSales);

router.post('/sale', checkAuth('user'), SalesController.addSales);

router.delete('/sale/:id', checkAuth('user'), SalesController.deleteSale);

export const SalesRoutes = router;
