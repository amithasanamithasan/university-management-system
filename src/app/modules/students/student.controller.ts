import { NextFunction, Request, Response } from 'express';
import { StudentServices } from './student.service';

// get controller
const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();

    res.status(200).json({
      success: true,
      message: 'Student are retrived successfully ',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

// single id student findOne

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentsFromDB(studentId);

    res.status(200).json({
      success: true,
      message: 'Student is retrived successfully ',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.deleteStudentFromDB(studentId);

    res.status(200).json({
      success: true,
      message: 'Student Deleted successfully ',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
export const StudentController = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
};
