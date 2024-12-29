/* eslint-disable @typescript-eslint/no-unused-vars */
import httpStatus from 'http-status-codes';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';

import catchAsync from '../utils/catchAsync';
import AppError from '../errors/AppError';
import config from '../config';

const authmiddleware = () => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    // console.log({ token: req.headers.authorization });
    const token = req.headers.authorization;
    // console.log(token);

    // checking if the token is missing
    if (!token) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized!');
    }

    // checking if the given token is valid
    const decoded = jwt.verify(
      token,
      config.jwt_access_secret as string,
    ) as JwtPayload;
    // console.log(decoded);
    req.user = decoded as JwtPayload;
    const { role, userId, iat } = decoded;
    next();
  });
};

export default authmiddleware;
