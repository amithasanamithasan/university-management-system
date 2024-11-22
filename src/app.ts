import cors from 'cors';

import express, { Application, Request, Response } from 'express';
// const express = require('express')
const app: Application = express();

// json nia use korbo tr jonno parser use korbo
app.use(express.json());
app.use(cors());

app.get('/', getAController);

export default app;
