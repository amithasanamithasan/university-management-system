import { Request, Response } from 'express';

import { UserServices } from './user.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { password, student: StudentData } = req.body;
    // console.log(StudentData);
    const result = await UserServices.createStudentIntoDB(
      password,
      StudentData,
    );

    res.status(200).json({
      success: true,
      message: 'Student is created successfully ',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: true,
      message: 'Something went worng  ',
      error: error,
    });
  }
};

export const UserControllers = {
  createStudent,
};
