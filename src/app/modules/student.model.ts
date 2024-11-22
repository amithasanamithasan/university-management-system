import { Schema, model } from 'mongoose';

import {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from './students/interface.student';

// 2. Create a Schema corresponding to the document interface.

const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
  },
});

const gurdianSchema = new Schema<Guardian>({
  fatherName: {
    type: String,
  },
  motherName: {
    type: String,
  },
  motherOccupation: {
    type: String,
  },
  motherContactNo: {
    type: String,
  },
});

const localGuardianSchema = new Schema<LocalGuardian>({
  name: {
    type: String,
  },
  occupation: {
    type: String,
  },
  contactNo: {
    type: String,
  },
  address: {
    type: String,
  },
});

// 2. Create a Schema corresponding to the document interface.
const studentSchema = new Schema<Student>({
  id: { type: String },
  name: userNameSchema,
  gender: ['male', 'female'],
  dateOfBirth: {
    type: String,
  },
  email: {
    type: String,
  },
  contactNo: {
    type: String,
  },
  emergencyContactNo: {
    type: String,
  },
  bloodGroup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  presentAddress: {
    type: String,
  },
  permanentAddress: {
    type: String,
  },
  guardian: gurdianSchema,

  localGuardian: localGuardianSchema,

  profileImage: {
    type: String,
  },
  isActive: ['active', 'blocked'],
});

// 3. Create a Model.
// model 2ta prameter nie name / Schema
export const StudentModel = model<Student>('Student', studentSchema);
