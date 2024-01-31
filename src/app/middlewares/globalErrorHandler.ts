import { ErrorRequestHandler } from 'express';

// eslint-disable-next-line
const globalErrorHandler: ErrorRequestHandler = (error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  const message = error.message || 'Something went wrong';

  res.status(statusCode).json({
    status: 'fail',
    statusCode,
    message,
  });
};

export default globalErrorHandler;
