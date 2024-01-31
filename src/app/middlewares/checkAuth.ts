import { NextFunction, Request, Response } from 'express';
import { verifyToken } from '../utils/tokenUtils';
import config from '../config';
import { JwtPayload } from 'jsonwebtoken';
import { User } from '../modules/User/user.model';

const checkAuth = (authRole: string) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req?.headers?.authorization;

      if (!token) {
        throw new Error('Unauthenticated');
      }

      const decodedToken = verifyToken(token, config.jwtAccessSecret as string);

      req.user = decodedToken as JwtPayload;

      const { role, email } = decodedToken as JwtPayload;

      if (role !== authRole) {
        throw new Error('Unauthorized');
      }

      const user = await User.findOne({ email, role });

      if (!user) {
        throw new Error('User not found');
      }

      next();
    } catch (error) {
      next(error);
    }
  };
};

export default checkAuth;
