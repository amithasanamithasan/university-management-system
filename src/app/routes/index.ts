import { Router } from 'express';

import { StudentsRoutes } from '../modules/students/student.route';
import { UserRoutes } from '../modules/user/user.route';

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
];

ModuleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
