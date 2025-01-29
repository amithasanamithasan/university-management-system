import express from 'express';
import { UserControllers } from './user.controller';
import validateRequest from '../../middleware/validateRequest';
import { createStudentValidationSchema } from '../students/student.validation';
import { createFacultyValidationSchema } from '../Faculty/validation.faculty';
import { createAdminValidationSchema } from '../Admin/admin.validation';
import authmiddleware from '../../middleware/auth';
import { USER_ROLE } from './user.constant';
import auth from '../../middleware/auth';
import { UserValidation } from './user.validation';

const router = express.Router();

// will call  controller funcation

router.post(
  '/create-student',
  // authmiddleware(USER_ROLE.admin),
  validateRequest(createStudentValidationSchema),
  UserControllers.createStudent,
);

router.post(
  '/create-faculty',
  authmiddleware(USER_ROLE.admin),
  validateRequest(createFacultyValidationSchema),
  UserControllers.createFaculty,
);

router.post(
  '/create-admin',
  // superadmin todo
  // authmiddleware(USER_ROLE.admin),
  validateRequest(createAdminValidationSchema),
  UserControllers.createAdmin,
);
router.post(
  '/change-status/:id',
  auth('admin'),
  validateRequest(UserValidation.changeStatusValidationSchema),
  UserControllers.changeStatus,
);
router.get(
  '/me',
  // superadmin todo
  // authmiddleware(USER_ROLE.admin),
  auth('student', 'faculty', 'admin'),
  UserControllers.getMe,
);

export const UserRoutes = router;
