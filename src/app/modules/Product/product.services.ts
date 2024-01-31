import queryBuilder from '../../builder/queryBuilder';
import { User } from '../User/user.model';
import { TProduct } from './product.interface';
import { Product } from './product.model';

const getAllProductsFromDb = async (query: Record<string, unknown>) => {
  const result = await queryBuilder(
    Product.find().sort({ createdAt: -1 }),
    query,
  );
  return result;
};

const getSingleProductFromDb = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

const addProductIntoDb = async (data: TProduct) => {
  const result = await Product.create(data);
  return result;
};

const deleteProductFromDb = async (id: string) => {
  const result = await Product.findByIdAndDelete(id);
  return result;
};

const updateProductIntoDb = async (id: string, data: Partial<TProduct>) => {
  const result = await Product.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });

  return result;
};

const deleteMultipleProductsFromDb = async (ids: string[]) => {
  const result = await Product.deleteMany({ _id: { $in: ids } });

  return result;
};

const getProductsValues = async () => {
  const result = await Product.aggregate([
    {
      $facet: {
        sportType: [
          { $unwind: '$sportType' },
          { $group: { _id: '$sportType' } },
        ],
        brand: [{ $unwind: '$brand' }, { $group: { _id: '$brand' } }],
        material: [{ $unwind: '$material' }, { $group: { _id: '$material' } }],
        size: [{ $unwind: '$size' }, { $group: { _id: '$size' } }],
        color: [{ $unwind: '$color' }, { $group: { _id: '$color' } }],
        style: [{ $unwind: '$style' }, { $group: { _id: '$style' } }],
      },
    },
  ]);
  return result;
};

const getProductsAndUsersCount = async () => {
  const products = await Product.countDocuments();
  const users = await User.countDocuments();
  return { products, users };
};

export const ProductServices = {
  addProductIntoDb,
  getAllProductsFromDb,
  getSingleProductFromDb,
  deleteProductFromDb,
  updateProductIntoDb,
  deleteMultipleProductsFromDb,
  getProductsValues,
  getProductsAndUsersCount,
};
