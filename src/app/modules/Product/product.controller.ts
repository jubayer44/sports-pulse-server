/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import { ProductServices } from './product.services';

const getAllProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await ProductServices.getAllProductsFromDb(req.query);

    if (result?.length < 1) {
      throw new Error('Products not found');
    }

    res.status(200).json({
      status: 'success',
      statusCode: 200,
      message: 'Products fetched successfully',
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

const getSingleProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req?.params?.id;

    const result = await ProductServices.getSingleProductFromDb(id);

    res.status(200).json({
      status: 'success',
      statusCode: 200,
      message: 'Product fetched successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const addProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = req?.body;

    data.isOutdoor = data.isOutdoor === 'yes' ? true : false;

    const result = await ProductServices.addProductIntoDb(data);
    res.status(201).json({
      status: 'success',
      statusCode: 201,
      message: 'Sport added successfully',
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

const deleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req?.params?.id;
    await ProductServices.deleteProductFromDb(id);

    res.status(200).json({
      status: 'success',
      statusCode: 200,
      message: 'Product deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

const updateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req?.params?.id;

    const data = req?.body;

    const result = await ProductServices.updateProductIntoDb(id, data);

    res.status(200).json({
      status: 'success',
      statusCode: 200,
      message: 'Product updated successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteMultipleProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const ids = req?.body;

    await ProductServices.deleteMultipleProductsFromDb(ids);

    res.status(200).json({
      status: 'success',
      statusCode: 200,
      message: 'Products deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

const getProductsValues = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await ProductServices.getProductsValues();

    res.status(200).json({
      status: 'success',
      statusCode: 200,
      message: 'Product values fetched successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getProductsAndUsersCount = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await ProductServices.getProductsAndUsersCount();

    res.status(200).json({
      status: 'success',
      statusCode: 200,
      message: 'Product values fetched successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const ProductController = {
  addProduct,
  getAllProduct,
  getSingleProduct,
  deleteProduct,
  updateProduct,
  deleteMultipleProduct,
  getProductsValues,
  getProductsAndUsersCount,
};
