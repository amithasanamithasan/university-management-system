import config from '../../config';
import { StudentModel } from '../student.model';
import { TStudent } from '../students/interface.student';
import { TUser } from './user.interface';

import { Usermodel } from './user.model';

const createStudentIntoDB = async (password: string, StudentData: TStudent) => {
  // Create a user object

  const userData: Partial<TUser> = {};
  // if password is not given ,use deafult password
  userData.password = password || (config.default_password as string);

  // set student role
  userData.role = 'student';

  // set manually generated id
  userData.id = '203010001';

  // create a user
  const newUser = await Usermodel.create(userData);
  console.log(newUser);
  // create a student
  if (Object.keys(newUser).length) {
    // set id ,_id as user
    StudentData.id = newUser.id;
    StudentData.user = newUser._id; //referance _id
    console.log('StudentData', StudentData.user);
    const newStudent = await StudentModel.create(StudentData);
    console.log(newStudent);
    return newStudent;
  }
};
export const UserServices = {
  createStudentIntoDB,
};
