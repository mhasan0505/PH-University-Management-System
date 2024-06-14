import express from "express";
import validateRequest from "../../midlewares/validateRequest";
import { AcademicDepartmentControllers } from "./acdemicDepartment.controller";
import { AcademicDepartmentValidation } from "./acdemicDepartment.Validation";

const router = express.Router();

// post
router.post(
  "/create-academic-department",
  validateRequest(
    AcademicDepartmentValidation.createAcademicDepartmentValidationSchema
  ),
  AcademicDepartmentControllers.createAcademicDepartment
);

// get by ID
router.get(
  "/:departmentId",
  AcademicDepartmentControllers.getSingleAcademicDepartment
);

// update
router.patch(
  "/:departmentId",
  validateRequest(
    AcademicDepartmentValidation.updateAcademicDepartmentValidationSchema
  ),
  AcademicDepartmentControllers.updateAcademicdepartment
);

// get All
router.get("/", AcademicDepartmentControllers.getAllAcademicDepartments);

export const academicDepartmentRoutes = router;
