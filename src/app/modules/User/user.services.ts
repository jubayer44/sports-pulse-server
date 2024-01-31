import { JwtPayload } from 'jsonwebtoken';
import { comparePassword, hashPassword } from '../../utils/passwordUtils';
import TUser, { TUserLogin } from './user.interface';
import { User } from './user.model';
import { createToken } from '../../utils/tokenUtils';
import config from '../../config';

const registerUser = async (data: TUser) => {
  const password = data?.password;

  const hashedPassword = hashPassword(password);

  const result = await User.create({ ...data, password: hashedPassword });
  return result;
};

const loginUser = async (payload: TUserLogin) => {
  const user = await User.findOne({ email: payload.email }).select('+password');

  if (!user) {
    throw new Error('User not found');
  }

  const isPasswordMatch = comparePassword(payload.password, user.password);

  if (!isPasswordMatch) {
    throw new Error('Invalid password');
  }

  const jwtPayload: JwtPayload = {
    role: user.role,
    email: user.email,
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwtAccessSecret as string,
    config.jwtExpiresIn as string,
  );

  const { _id, email, name, role } = user;

  const result = {
    _id,
    email,
    name,
    role,
  };

  return { user: result, token: accessToken };
};

export const UserServices = {
  registerUser,
  loginUser,
};
