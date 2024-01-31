import { NextFunction, Request, Response } from 'express';
import { SalesServices } from './sales.services';

const getSales = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const query = req?.query?.priority as string | null;

    const result = await SalesServices.getSalesFromDb(query);

    res.status(201).json({
      status: 'success',
      statusCode: 200,
      message: 'Sales fetched successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const addSales = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = req?.body;
    const result = await SalesServices.addSalesIntoDb(data);

    res.status(201).json({
      status: 'success',
      statusCode: 201,
      message: 'Sales added successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteSale = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req?.params?.id;

    await SalesServices.deleteSaleFromDb(id);

    res.status(200).json({
      status: 'success',
      statusCode: 200,
      message: 'Sale deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

export const SalesController = {
  addSales,
  getSales,
  deleteSale,
};
