import { TAcademicFaculty } from './interface.academicFaculty';
import { AcademicFaculty } from './model.academicFaculty';

const createAcademicFacultyIntoDB = async (payload: TAcademicFaculty) => {
  const result = await AcademicFaculty.create(payload);
  return result;
};

export const AcademicFacultyServices = {
  createAcademicFacultyIntoDB,
};
