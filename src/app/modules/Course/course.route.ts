import express from 'express';

import { CourseControllers } from './course.controller';
import { CourseValidations } from './course.validation';
import validateRequest from '../../middleware/validateRequest';
import auth from '../../middleware/auth';

const router = express.Router();

router.post(
  '/create-course',
  auth('admin'),
  validateRequest(CourseValidations.createCourseValidationSchema),
  CourseControllers.createCourse,
);

router.get(
  '/:id',
  auth('student', 'faculty', 'admin'),
  CourseControllers.getSingleCourse,
);

router.delete('/:id', auth('admin'), CourseControllers.deleteCourse);

router.get('/', CourseControllers.getAllCourses);
router.put(
  '/:courseId/assign-faculties',
  validateRequest(CourseValidations.facultiesWithCourseValidationSchema),
  CourseControllers.assignFacultiesWithCourse,
);
router.patch(
  '/:id',
  auth('admin'),
  validateRequest(CourseValidations.updateCourseValidationSchema),
  CourseControllers.updateCourse,
);
export const CourseRoutes = router;
