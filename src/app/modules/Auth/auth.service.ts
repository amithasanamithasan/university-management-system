/* eslint-disable @typescript-eslint/no-unused-vars */
import bcrypt from 'bcrypt';
import httpStatus from 'http-status-codes';

import config from '../../config';
import AppError from '../../errors/AppError';

import { TLoginUser } from './auth.interface';
import { createToken } from './auth.utils';
import { Usermodel } from '../user/user.model';

const loginUser = async (payload: TLoginUser) => {
  console.log(payload);
  // checking if the user is exist
  //   const user = await Usermodel.isUserExistsByCustomId(payload.id);

  //   if (!user) {
  //     throw new AppError(httpStatus.NOT_FOUND, 'This user is not found !');
  //   }
  //   // checking if the user is already deleted

  //   const isDeleted = user?.isDeleted;

  //   if (isDeleted) {
  //     throw new AppError(httpStatus.FORBIDDEN, 'This user is deleted !');
  //   }

  //   // checking if the user is blocked

  //   const userStatus = user?.status;

  //   if (userStatus === 'blocked') {
  //     throw new AppError(httpStatus.FORBIDDEN, 'This user is blocked ! !');
  //   }

  //   //checking if the password is correct

  //   if (!(await Usermodel.isPasswordMatched(payload?.password, user?.password)))
  //     throw new AppError(httpStatus.FORBIDDEN, 'Password do not matched');

  //   //create token and sent to the  client

  //   const jwtPayload = {
  //     userId: user.id,
  //     role: user.role,
  //   };

  //   const accessToken = createToken(
  //     jwtPayload,
  //     config.jwt_access_secret as string,
  //     config.jwt_access_expires_in as string,
  //   );

  //   const refreshToken = createToken(
  //     jwtPayload,
  //     config.jwt_refresh_secret as string,
  //     config.jwt_refresh_expires_in as string,
  //   );

  //   return {
  //     accessToken,
  //     refreshToken,
  //     needsPasswordChange: user?.needsPasswordChange,
  //   };
};
export const AuthServices = {
  loginUser,
  // changePassword,
  // refreshToken,
};
