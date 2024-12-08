import express from 'express';
import { StudentController } from './student.controller';

const router = express.Router();

// will call  controller funcation

<<<<<<< HEAD
router.post('/create-student', StudentController.createStudent);

router.get('/', StudentController.getAllStudents);
router.get('/:studentId', StudentController.getSingleStudent);
=======
// router.post('/create-student', StudentController.createStudent);

router.get('/', StudentController.getAllStudents);
router.get('/:studentId', StudentController.getSingleStudent);
router.delete('/:studentId', StudentController.deleteStudent);
>>>>>>> 714edf6 (Create User as Student created database mach user referance id)
export const StudentsRoutes = router;
