import { Router } from "express";
import { StudentRoutes } from "../module/student/student.route";
import { UserRoutes } from "../module/user/user.route";
import { AcademicSemesterRoutes } from "../module/academicSemester/acdemicSemester.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/users",
    route: UserRoutes,
  },
  {
    path: "/students",
    route: StudentRoutes,
  },
  {
    path: "/academic-semesters",
    route: AcademicSemesterRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
