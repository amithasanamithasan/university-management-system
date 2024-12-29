/* eslint-disable @typescript-eslint/no-unused-vars */
import httpStatus from 'http-status-codes';
import { NextFunction, Request, Response } from 'express';

import catchAsync from '../utils/catchAsync';
import AppError from '../errors/AppError';

const authmiddleware = () => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    // console.log({ token: req.headers.authorization });
    const token = req.headers.authorization;
    // console.log(token);
    // checking if the token is missing
    if (!token) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized!');
    }
    next();
  });
};

export default authmiddleware;
