import express from 'express';

import { AuthValidation } from './auth.validation';
import validateRequest from '../../middleware/validateRequest';
import { AuthControllers } from './auth.controller';
import { USER_ROLE } from '../user/user.constant';
import authmiddleware from '../../middleware/auth';

const router = express.Router();

router.post(
  '/login',
  validateRequest(AuthValidation.loginValidationSchema),
  AuthControllers.loginUser,
);

router.post(
  '/change-password',
  authmiddleware(USER_ROLE.admin, USER_ROLE.faculty, USER_ROLE.student),
  validateRequest(AuthValidation.changePasswordValidationSchema),
  AuthControllers.changePassword,
);

// router.post(
//   '/refresh-token',
//   validateRequest(AuthValidation.refreshTokenValidationSchema),
//   AuthControllers.refreshToken,
// );

export const AuthRoutes = router;