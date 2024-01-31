/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from 'mongoose';
import { Product } from '../Product/product.model';
import TSales from './sales.interface';
import { Sales } from './sales.model';

const getSalesFromDb = async (query: string | null) => {
  let date = null;

  if (query && query === 'daily') {
    date = new Date();
    date.setDate(date.getDate() - 1);
  } else if (query && query === 'weekly') {
    date = new Date();
    date.setDate(date.getDate() - 7);
  } else if (query && query === 'monthly') {
    date = new Date();
    date.setMonth(date.getMonth() - 1);
  } else if (query && query === 'yearly') {
    date = new Date();
    date.setFullYear(date.getFullYear() - 1);
  }

  let queryParam = {};
  if (date) {
    queryParam = {
      saleDate: {
        $gte: date,
        $lte: new Date(),
      },
    };
  }
  const result = await Sales.find(queryParam)
    .sort({ createdAt: -1 })
    .populate('product');
  return result;
};

const addSalesIntoDb = async (data: TSales) => {
  const product = await Product.findById(data.product);

  if (!product) {
    throw new Error('Product not found');
  }

  if (product.quantity < data.quantity) {
    throw new Error('Insufficient quantity');
  }

  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    const result = await Sales.create(data);

    if (!result) {
      throw new Error('Failed to add sales');
    }

    const updateProduct = await Product.findByIdAndUpdate(product._id, {
      $inc: { quantity: -data.quantity },
    });

    if (!updateProduct) {
      throw new Error('Failed to update product');
    }

    await session.commitTransaction();
    await session.endSession();

    return result;
  } catch (error: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(error);
  }
};

const deleteSaleFromDb = async (id: string) => {
  const result = await Sales.findByIdAndDelete(id);
  return result;
};

export const SalesServices = {
  addSalesIntoDb,
  getSalesFromDb,
  deleteSaleFromDb,
};
