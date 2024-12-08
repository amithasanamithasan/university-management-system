import { Schema, model } from 'mongoose';

import {
<<<<<<< HEAD
  Guardian,
  LocalGuardian,
  Student,
  UserName,
=======
  TGuardian,
  TLocalGuardian,
  TStudent,
  TUserName,
>>>>>>> 714edf6 (Create User as Student created database mach user referance id)
} from './students/interface.student';

// 2. Create a Schema corresponding to the document interface.

<<<<<<< HEAD
const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: [true, 'First Name is required'],
=======
const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    required: true,
>>>>>>> 714edf6 (Create User as Student created database mach user referance id)
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
<<<<<<< HEAD
    required: [true, 'Last Name is required'],
  },
});

const gurdianSchema = new Schema<Guardian>({
  fatherName: {
    type: String,
    required: [true, 'Father Name is required'],
  },
  motherName: {
    type: String,
    required: [true, 'Mother Name is required'],
  },
  motherOccupation: {
    type: String,
    required: [true, 'Mother occupation is required'],
  },
  motherContactNo: {
    type: String,
    required: [true, 'Mother Contact No is required'],
  },
});

const localGuardianSchema = new Schema<LocalGuardian>({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  occupation: {
    type: String,
    required: [true, 'Occupation is required'],
  },
  contactNo: {
    type: String,
    required: [true, 'Contact number is required'],
  },
  address: {
    type: String,
    required: [true, 'Address is required'],
=======
    required: true,
  },
});

const guardianSchema = new Schema<TGuardian>({
  fatherName: {
    type: String,
    required: true,
  },
  fatherOccupation: {
    type: String,
    required: true,
  },
  fatherContactNo: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  motherOccupation: {
    type: String,
    required: true,
  },
  motherContactNo: {
    type: String,
    required: true,
  },
});

const localGuradianSchema = new Schema<TLocalGuardian>({
  name: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
>>>>>>> 714edf6 (Create User as Student created database mach user referance id)
  },
});

// 2. Create a Schema corresponding to the document interface.
<<<<<<< HEAD
const studentSchema = new Schema<Student>({
  // id duplicate hobe na mane 2 bar add hobe na tr jonno unique :true
  // E11000 duplicate key error collection
  id: {
    type: String,
    required: [true, 'ID is required'],
    unique: true,
  },
  name: {
    type: userNameSchema,
    required: [true, 'Name is required'],
  },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female', 'other'],
      message: '{VALUE} is not a valid gender',
    },
  },
  dateOfBirth: {
    type: String,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  contactNo: {
    type: String,
    required: [true, 'ContactNo is required'],
  },
  emergencyContactNo: {
    type: String,
    required: [true, 'Emergency contact number is required'],
  },
  bloodGroup: {
    type: String,
    enum: {
      values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      message: '{VALUE} is not a valid blood group',
    },
  },
  presentAddress: {
    type: String,
    required: [true, 'Present address is required'],
  },
  permanentAddress: {
    type: String,
    required: [true, 'Permanent address is required'],
  },
  guardian: {
    type: gurdianSchema,
    required: [true, 'Guardian information is required'],
  },

  localGuardian: {
    type: localGuardianSchema,
    required: [true, 'Local guardian information is required'],
  },

  profileImage: {
    type: String,
  },
  isActive: {
    type: String,
    enum: {
      values: ['active', 'blocked'],
      message: '{VALUE} is not a valid status',
    },
    default: 'active',
  },
});

// 3. Create a Model.
// model 2ta prameter nie name / Schema
export const StudentModel = model<Student>('Student', studentSchema);
=======
const studentSchema = new Schema<TStudent>(
  {
    // id duplicate hobe na mane 2 bar add hobe na tr jonno unique :true
    // E11000 duplicate key error collection
    id: {
      type: String,

      required: [true, 'ID is required'],
      unique: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      required: [true, 'User id is  required'],
      unique: true,
      ref: 'User',
    },

    name: {
      type: userNameSchema,
      trim: true,
      required: [true, 'Name is required'],
      maxlength: [20, 'Password can not be more than 20 characters'],
    },
    gender: {
      type: String,
      enum: {
        values: ['male', 'female', 'other'],
        message: '{VALUE} is not a valid gender',
      },
    },
    dateOfBirth: {
      type: String,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    },
    contactNo: {
      type: String,
      required: [true, 'ContactNo is required'],
    },
    emergencyContactNo: {
      type: String,
      required: [true, 'Emergency contact number is required'],
    },
    bloogGroup: {
      type: String,
      enum: {
        values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
        message: '{VALUE} is not a valid blood group',
      },
    },
    presentAddress: {
      type: String,
      required: [true, 'Present address is required'],
    },
    permanentAddress: {
      type: String,
      required: [true, 'Permanent address is required'],
    },
    guardian: {
      type: guardianSchema,
      required: [true, 'Guardian information is required'],
    },

    localGuardian: {
      type: localGuradianSchema,
      required: [true, 'Local guardian information is required'],
    },

    profileImage: {
      type: String,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
);

// 3. Create a Model.
// model 2ta prameter nie name / Schema
export const StudentModel = model<TStudent>('Student', studentSchema);
>>>>>>> 714edf6 (Create User as Student created database mach user referance id)
