import { Student } from './interface.student';
import { StudentModel } from '../student.model';
<<<<<<< HEAD
const createStudentIntoDB = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};
=======
>>>>>>> 714edf6 (Create User as Student created database mach user referance id)

const getAllStudentsFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};

const getSingleStudentsFromDB = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};
<<<<<<< HEAD

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentsFromDB,
=======
const deleteStudentFromDB = async (id: string) => {
  const result = await StudentModel.updateOne({ id }, { isDeleted: true });
  return result;
};

export const StudentServices = {
  getAllStudentsFromDB,
  getSingleStudentsFromDB,
  deleteStudentFromDB,
>>>>>>> 714edf6 (Create User as Student created database mach user referance id)
};
