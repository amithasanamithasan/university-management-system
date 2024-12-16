import express from 'express';
import { StudentController } from './student.controller';
import validateRequest from '../../middleware/validateRequest';
import { updateStudentValidationSchema } from './student.validation';

const router = express.Router();

// will call  controller funcation

router.get('/', StudentController.getAllStudents);
router.get('/:studentId', StudentController.getSingleStudent);

// router.post('/create-student', StudentController.createStudent);

router.get('/', StudentController.getAllStudents);
router.get('/:studentId', StudentController.getSingleStudent);
router.delete('/:studentId', StudentController.deleteStudent);
router.patch(
  '/:studentId',
  validateRequest(updateStudentValidationSchema),
  StudentController.updateStudent,
);

export const StudentsRoutes = router;
