<<<<<<< HEAD
import { Request, Response } from 'express';
import { StudentServices } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: StudentData } = req.body;
    // console.log(StudentData);
    const result = await StudentServices.createStudentIntoDB(StudentData);

    res.status(200).json({
      success: true,
      message: 'Student is created successfully ',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
=======
import { NextFunction, Request, Response } from 'express';
import { StudentServices } from './student.service';

>>>>>>> 714edf6 (Create User as Student created database mach user referance id)
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
<<<<<<< HEAD
export const StudentController = {
  createStudent,
  getAllStudents,
  getSingleStudent,
=======
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
>>>>>>> 714edf6 (Create User as Student created database mach user referance id)
};
