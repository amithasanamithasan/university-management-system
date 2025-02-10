import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Application, Request, Response } from 'express';

import globalErrorHandler from './app/middleware/globalErrorhandler';
import notFound from './app/middleware/notFound';
import router from './app/routes';

// const express = require('express')
const app: Application = express();

// json nia use korbo tr jonno parser use korbo
app.use(express.json());
app.use(cookieParser());
// frontend localhost dia raklam jate kono issue na hoi
app.use(cors({ origin: ['http://localhost:5173'], credentials: true }));

// application routes

app.use('/api/v1', router);
// app.use('/api/v1/', UserRoutes);

const test = (req: Request, res: Response) => {
  const a = 10;

  res.send(a);
};

app.get('/', test);
app.use(globalErrorHandler);
//Not Found
app.use(notFound);
export default app;
