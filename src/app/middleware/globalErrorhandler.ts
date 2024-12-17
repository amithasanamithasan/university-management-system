import { ErrorRequestHandler } from 'express';
import config from '../config';
import { TErrorSources } from '../interface/error';
import { ZodError } from 'zod';
import handleZodError from '../errors/handleZodError';

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  // Set default values
  let statusCode = err.statusCode || 500;
  let message = err.message || 'Something went wrong!';
  let errorSources: TErrorSources = [
    {
      path: '',
      message: 'Something went wrong',
    },
  ];

  // Handle specific errors like Zod validation errors
  if (err instanceof ZodError) {
    const simplifiedError = handleZodError(err);
    statusCode = simplifiedError.statusCode || 500;
    message = simplifiedError.message || 'Validation error';
    errorSources = simplifiedError.errorSources || [
      {
        path: '',
        message: 'Validation failed',
      },
    ];
  }

  // Return the error response
  res.status(statusCode).json({
    success: false,
    message,
    errorSources,
    err: err,
    stack: config.NODE_ENV === 'development' ? err.stack : null,
  });

  next(); // Ensure that next() is called at the end
};

export default globalErrorHandler;
