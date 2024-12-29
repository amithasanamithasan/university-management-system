import httpStatus from 'http-status-codes';
import mongoose from 'mongoose';
import AppError from '../../errors/AppError';
import { StudentModel } from '../student.model';
import { Usermodel } from '../user/user.model';
import { TStudent } from './interface.student';
import QueryBuilder from '../../builder/QueryBuilder';
import { studentSearchableFields } from './student.constant';

const getAllStudentsFromDB = async (query: Record<string, unknown>) => {
  // const queryObj = { ...query }; // copying req.query object so that we can mutate the copy object
  // HOW OUR FORMAT SHOULD BE FOR PARTIAL MATCH SearchQuery  :
  //  { email: { $regex : query.searchTerm , $options: i}}
  //  { presentAddress: { $regex : query.searchTerm , $options: i}}
  //  { 'name.firstName': { $regex : query.searchTerm , $options: i}}
  // jodi client thake na die r jodi daie
  // const studentSearchableFields = [
  //   'email',
  //   'name.firstName',
  //   ' presentAddress',
  // ];
  // let searchTerm = '';
  // if (query?.searchTerm) {
  //   searchTerm = query?.searchTerm as string;
  // }
  // const searchQuery = StudentModel.find({
  //   $or: studentSearchableFields.map((field) => ({
  //     [field]: { $regex: searchTerm, $options: 'i' },
  //   })),
  // });
  // FILTERING fUNCTIONALITY:
  // const excludeFields = ['searchTerm', 'sort', 'limit', 'page', 'fields'];
  // excludeFields.forEach((el) => delete queryObj[el]); // DELETING THE FIELDS SO THAT IT CAN'T MATCH OR FILTER EXACTLY
  // // queryObj jwar age aita deleted kore fellam
  // console.log({ query }, { queryObj });
  // const filterQuery = searchQuery
  //   .find(queryObj)
  //   .populate('admissionSemester')
  //   .populate({
  //     path: 'academicDepartment',
  //     populate: {
  //       path: 'academicFaculty',
  //     },
  //   });
  // SORTING FUNCTIONALITY:
  // let sort = '-createdAt'; // SET DEFAULT VALUE
  // // IF sort  IS GIVEN SET IT
  // if (query.sort) {
  //   sort = query.sort as string;
  // }
  // const sortQuery = filterQuery.sort(sort);
  // // PAGINATION FUNCTIONALITY:
  // let page = 1; // SET DEFAULT VALUE FOR PAGE
  // let limit = 1; // SET DEFAULT VALUE FOR LIMIT
  // let skip = 0; // SET DEFAULT VALUE FOR SKIP
  // // IF page IS GIVEN SET IT
  // if (query.limit) {
  //   limit = Number(query.limit);
  // }
  // if (query.page) {
  //   page = Number(query.page);
  //   skip = (page - 1) * limit;
  // }
  // const paginateQuery = sortQuery.skip(skip);
  // const limitQuery = paginateQuery.limit(limit);
  // // FIELDS LIMITING FUNCTIONALITY:
  // // fields: 'name,email'; // WE ARE ACCEPTING FROM REQUEST
  // //fields: 'name email'; // HOW IT SHOULD BE
  // let fields = '-__v';
  // if (query.fields) {
  //   fields = (query.fields as string).split(',').join(' ');
  //   console.log(fields);
  // }
  // const fieldQuery = await limitQuery.select(fields);
  // return fieldQuery;

  const studentQuery = new QueryBuilder(
    StudentModel.find()
      .populate('user')
      .populate('admissionSemester')
      .populate({
        path: 'academicDepartment',
        populate: {
          path: 'academicFaculty',
        },
      }),
    query,
  )
    .search(studentSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await studentQuery.modelQuery;
  return result;
};

const getSingleStudentsFromDB = async (id: string) => {
  const result = await StudentModel.findById(id)
    .populate('admissionSemester')
    .populate({
      path: 'academicDepartment',
      populate: {
        path: 'academicFaculty',
      },
    });
  return result;
};

// const deleteStudentFromDB = async (id: string) => {
//   const result = await StudentModel.updateOne({ id }, { isDeleted: true });
//   return result;
// };
const deleteStudentFromDB = async (id: string) => {
  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    const deletedStudent = await StudentModel.findByIdAndUpdate(
      id,
      { isDeleted: true },
      { new: true, session },
    );

    if (!deletedStudent) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to delete student');
    }
    // get user _id from deletedStudent
    const userId = deletedStudent.user;

    const deletedUser = await Usermodel.findByIdAndUpdate(
      userId,
      { isDeleted: true },
      { new: true, session },
    );

    if (!deletedUser) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to delete user');
    }

    await session.commitTransaction();
    await session.endSession();

    return deletedStudent;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error('Failed to delete student');
  }
};
// Update student
const updateStudentIntoDB = async (id: string, payload: Partial<TStudent>) => {
  // non premative field update data destcuring data into database
  const { name, guardian, localGuardian, ...remainingStudentData } = payload;

  const modifiedUpdatedData: Record<string, unknown> = {
    ...remainingStudentData,
  };

  /*
    guardain: {
      fatherOccupation:"Teacher"
    }

    guardian.fatherOccupation = Teacher

    name.firstName = 'Mezba'
    name.lastName = 'Abedin'
  */

  if (name && Object.keys(name).length) {
    for (const [key, value] of Object.entries(name)) {
      modifiedUpdatedData[`name.${key}`] = value;
    }
  }

  if (guardian && Object.keys(guardian).length) {
    for (const [key, value] of Object.entries(guardian)) {
      modifiedUpdatedData[`guardian.${key}`] = value;
    }
  }

  if (localGuardian && Object.keys(localGuardian).length) {
    for (const [key, value] of Object.entries(localGuardian)) {
      modifiedUpdatedData[`localGuardian.${key}`] = value;
    }
  }

  // console.log(modifiedUpdatedData);

  const result = await StudentModel.findByIdAndUpdate(id, modifiedUpdatedData, {
    new: true,
    runValidators: true,
  });
  return result;
};
export const StudentServices = {
  getAllStudentsFromDB,
  getSingleStudentsFromDB,
  deleteStudentFromDB,
  updateStudentIntoDB,
};
