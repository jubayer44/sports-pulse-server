import { FilterQuery, Query } from 'mongoose';
import { TProduct } from '../modules/Product/product.interface';

const queryBuilder = <T>(
  modelQuery: Query<T[], T>,
  query: Record<string, unknown>,
) => {
  const queryObj = { ...query };

  const queryKeys = ['minPrice', 'maxPrice', 'search'];

  queryKeys.forEach((item) => delete queryObj[item]);

  const searchableFields = ['name', 'brand', 'material'];

  const searchTerm = (query?.search as string) || '';

  if (searchTerm) {
    modelQuery = modelQuery.find({
      $or: searchableFields.map(
        (field) =>
          ({
            [field]: {
              $regex: searchTerm as string,
              $options: 'i',
            },
          }) as FilterQuery<T>,
      ),
    });
  }

  modelQuery = modelQuery.find(queryObj as Partial<TProduct>);

  const minPrice = (query?.minPrice as number) || 0;
  const maxPrice = (query?.maxPrice as number) || Infinity;

  if (query?.minPrice || query?.maxPrice) {
    modelQuery = modelQuery.where('price').gte(minPrice).lte(maxPrice);
  }

  return modelQuery;
};

export default queryBuilder;
