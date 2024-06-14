import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { academicDepartmentServices } from "./acdemicDepartment.services";

const createAcademicDepartment = catchAsync(async (req, res) => {
  const result =
    await academicDepartmentServices.createAcademicDepartmentIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic department is created succesfully",
    data: result,
  });
});

const getAllAcademicDepartments = catchAsync(async (req, res) => {
  const result =
    await academicDepartmentServices.getAllAcademicDepartmentIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic departments are retrieved successfully",
    data: result,
  });
});

const getSingleAcademicDepartment = catchAsync(async (req, res) => {
  const { departmentId } = req.params;
  const result =
    await academicDepartmentServices.getSingleAcademicDepartmentIntoDB(
      departmentId
    );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic department is retrieved succesfully",
    data: result,
  });
});

const updateAcademicdepartment = catchAsync(async (req, res) => {
  const { departmentId } = req.params;
  const result =
    await academicDepartmentServices.updateAcademicDepartmentIntoDB(
      departmentId,
      req.body
    );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic department is updated succesfully",
    data: result,
  });
});

export const AcademicDepartmentControllers = {
  createAcademicDepartment,
  getAllAcademicDepartments,
  getSingleAcademicDepartment,
  updateAcademicdepartment,
};
