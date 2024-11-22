import { Student } from './interface.student';
import { StudentModel } from '../student.model';
const createStudentIntoDB = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};
export const StudentServices = {
  createStudentIntoDB,
};
