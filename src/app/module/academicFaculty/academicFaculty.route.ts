import express from "express";
import { AcademicFacultyControllers } from "./academicFaculty.controller";

const router = express.Router();

router.get("/", AcademicFacultyControllers.getAllAcademicFaculties);
router.post(
  "/create-academic-faculty",
  AcademicFacultyControllers.createAcademicFaculty
);

router.get("/:facultyId", AcademicFacultyControllers.getSingleAcademicFaculty);

export const academicFacultyRoutes = router;
