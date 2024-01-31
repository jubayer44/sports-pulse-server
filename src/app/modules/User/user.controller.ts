import { NextFunction, Request, Response } from 'express';
import { UserServices } from './user.services';

const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = req?.body;
    const result = await UserServices.registerUser(data);

    res.status(201).json({
      status: 'success',
      statusCode: 201,
      message: 'User added successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = req?.body;

    const result = await UserServices.loginUser(data);

    res.status(200).json({
      status: 'success',
      statusCode: 200,
      message: 'User logged in successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const UserController = {
  register,
  login,
};
