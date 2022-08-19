import { NextFunction, Request, Response } from 'express';
import CustomError from './CustomError';

const errorMiddleware = (
  error: CustomError,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  if (error.status) {
    return res.status(error.status).json({ error: error.message });
  }
  return res.status(500).json({ message: 'Internal server error' });
};

export default errorMiddleware;