import express from 'express';
import { StudentController } from './student.controller';

const router = express.Router();

// will call  controller funcation

router.post('/create-student', StudentController.createStudent);
