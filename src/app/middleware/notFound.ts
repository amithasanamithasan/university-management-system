/* eslint-disable @typescript-eslint/no-unused-vars */

import status from 'http-status-codes';
import { NextFunction, Request, Response } from 'express';

const notFound = (req: Request, res: Response, next: NextFunction): void => {
  res.status(status.NOT_FOUND).json({
    success: false,
    message: 'API Not Found !!',
    error: '',
  });
};

export default notFound;
