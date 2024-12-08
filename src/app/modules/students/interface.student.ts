<<<<<<< HEAD
// 1. Create an interface representing a document in MongoDB.

export type UserName = {
=======
import { Types } from 'mongoose';

export type TUserName = {
>>>>>>> 714edf6 (Create User as Student created database mach user referance id)
  firstName: string;
  middleName: string;
  lastName: string;
};

<<<<<<< HEAD
export type Guardian = {
  fatherName: string;
=======
export type TGuardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
>>>>>>> 714edf6 (Create User as Student created database mach user referance id)
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};

<<<<<<< HEAD
export type LocalGuardian = {
=======
export type TLocalGuardian = {
>>>>>>> 714edf6 (Create User as Student created database mach user referance id)
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};

<<<<<<< HEAD
export type Student = {
  id: string;
  name: UserName;
=======
export type TStudent = {
  id: string;
  user: Types.ObjectId;
  name: TUserName;
>>>>>>> 714edf6 (Create User as Student created database mach user referance id)
  gender: 'male' | 'female';
  dateOfBirth?: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
<<<<<<< HEAD
  bloodGroup: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  permanentAddress: string;
  guardian: Guardian;
  localGuardian: LocalGuardian;
  profileImage?: string;
  isActive: 'active' | 'blocked';
=======
  bloogGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  permanentAddress: string;
  guardian: TGuardian;
  localGuardian: TLocalGuardian;
  profileImage?: string;
  isDeleted: boolean;
>>>>>>> 714edf6 (Create User as Student created database mach user referance id)
};
