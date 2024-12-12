import httpStatus from 'http-status-codes';
import { NextFunction, Request, Response } from 'express';

import { UserServices } from './user.service';
import sendResponse from '../../utils/sendResponse';

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { password, student: StudentData } = req.body;
    // console.log(StudentData);
    const result = await UserServices.createStudentIntoDB(
      password,
      StudentData,
    );

    // res.status(200).json({
    //   success: true,
    //   message: 'Student is created successfully ',
    //   data: result,
    // });
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student is created succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const UserControllers = {
  createStudent,
};
