import { Router } from "express";
import { academicFacultyRoutes } from "../module/academicFaculty/academicFaculty.route";
import { AcademicSemesterRoutes } from "../module/academicSemester/acdemicSemester.route";
import { StudentRoutes } from "../module/student/student.route";
import { UserRoutes } from "../module/user/user.route";
import { academicDepartmentRoutes } from "../module/academicDepartment/acdemicDepartment.route";

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
  {
    path: "/academic-faculty",
    route: academicFacultyRoutes,
  },
  {
    path: "/academic-departments",
    route: academicDepartmentRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
