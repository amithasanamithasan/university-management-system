import config from '../../config';
import { AcademicSemester } from '../academicSemester/academicSemester.model';
import { StudentModel } from '../student.model';
import { TStudent } from '../students/interface.student';
import { TUser } from './user.interface';

import { Usermodel } from './user.model';
import { generateStudentId } from './user.utils';

const createStudentIntoDB = async (password: string, payload: TStudent) => {
  // Create a user object

  const userData: Partial<TUser> = {};
  // if password is not given ,use deafult password
  userData.password = password || (config.default_password as string);

  // set student role
  userData.role = 'student';
  // find academic semester info
  const admissionSemester = await AcademicSemester.findById(
    payload.admissionSemester,
  );

  //set  generated id
  userData.id = await generateStudentId(admissionSemester);

  // create a user
  const newUser = await Usermodel.create(userData);

  //create a student
  if (Object.keys(newUser).length) {
    // set id , _id as user
    payload.id = newUser.id;
    payload.user = newUser._id; //reference _id

    const newStudent = await StudentModel.create(payload);
    return newStudent;
  }
};
export const UserServices = {
  createStudentIntoDB,
};
