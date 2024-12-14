import httpStatus from 'http-status-codes';

import { UserServices } from './user.service';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';

const createStudent = catchAsync(async (req, res) => {
  const { password, student: StudentData } = req.body;
  // console.log(StudentData);
  const result = await UserServices.createStudentIntoDB(password, StudentData);

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
});

export const UserControllers = {
  createStudent,
};
