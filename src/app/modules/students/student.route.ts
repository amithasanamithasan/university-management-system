import express from 'express';
import { StudentController } from './student.controller';
import validateRequest from '../../middleware/validateRequest';
import { updateStudentValidationSchema } from './student.validation';
import auth from '../../middleware/auth';

const router = express.Router();

// will call  controller funcation

router.get('/', StudentController.getAllStudents);

router.get(
  '/:id',
  auth('admin', 'faculty'),
  StudentController.getSingleStudent,
);

router.patch(
  '/:id',
  validateRequest(updateStudentValidationSchema),
  StudentController.updateStudent,
);

router.delete('/:id', StudentController.deleteStudent);

export const StudentsRoutes = router;
