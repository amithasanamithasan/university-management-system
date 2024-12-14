import { Router } from 'express';

import { StudentsRoutes } from '../modules/students/student.route';
import { UserRoutes } from '../modules/user/user.route';
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.route';

const router = Router();

// router.use('/students', StudentsRoutes);
// router.use('/users', UserRoutes);

const ModuleRoutes = [
  {
    path: '/students',
    route: StudentsRoutes,
  },
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/academic-semesters',
    route: AcademicSemesterRoutes,
  },
];

ModuleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
