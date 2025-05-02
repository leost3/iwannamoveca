import { Request, Response, NextFunction } from 'express';
import { HttpError } from '../utils/httpError';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  console.error(`Error: ${err.message}`);
  
  if (err instanceof HttpError) {
    res.status(err.statusCode).json({
      status: 'error',
      statusCode: err.statusCode,
      message: err.message
    });
    return;
  }
  
  res.status(500).json({
    status: 'error',
    statusCode: 500,
    message: 'Internal Server Error'
  });
};