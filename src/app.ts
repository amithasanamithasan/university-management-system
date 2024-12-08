import cors from 'cors';

import express, { Application, Request, Response } from 'express';
import { StudentsRoutes } from './app/modules/students/student.route';
<<<<<<< HEAD
=======
import { UserRoutes } from './app/modules/user/user.route';
>>>>>>> 714edf6 (Create User as Student created database mach user referance id)
// const express = require('express')
const app: Application = express();

// json nia use korbo tr jonno parser use korbo
app.use(express.json());
app.use(cors());

// application routes

app.use('/api/v1/students', StudentsRoutes);
<<<<<<< HEAD
=======
app.use('/api/v1/users', UserRoutes);
>>>>>>> 714edf6 (Create User as Student created database mach user referance id)

const getAController = (req: Request, res: Response) => {
  const a = 10;

  res.send(a);
};

app.get('/', getAController);

export default app;
