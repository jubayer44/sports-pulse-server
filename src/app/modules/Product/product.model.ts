import { Schema, model } from 'mongoose';
import { TProduct } from './product.interface';

const ProductSchema = new Schema<TProduct>(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
      required: true,
    },
    sportType: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    material: {
      type: String,
      required: true,
    },
    condition: {
      type: String,
      enum: ['New', 'Used'],
      required: true,
    },
    isOutdoor: {
      type: Boolean,
      required: true,
    },
    size: {
      type: String,
    },
    color: {
      type: String,
    },
    width: {
      type: String,
    },
    style: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

ProductSchema.pre('find', function (next) {
  this.where({ quantity: { $gte: 1 } });
  next();
});

ProductSchema.pre('findOne', function (next) {
  this.findOne({ quantity: { $gte: 1 } });
  next();
});

export const Product = model<TProduct>('Product', ProductSchema);
