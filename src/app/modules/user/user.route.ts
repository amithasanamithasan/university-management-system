import express from 'express';
import { UserControllers } from './user.controller';

const router = express.Router();

// will call  controller funcation

router.post('/create-student', UserControllers.createStudent);

export const UserRoutes = router;
