import { Schema, model } from 'mongoose';
import TUser from './user.interface';

const userSchema = new Schema<TUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: 0,
    },
    role: {
      type: String,
      default: 'user',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const User = model<TUser>('User', userSchema);
