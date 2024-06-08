import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AcademicSemesterService } from "./academicSemester.Service";

const createAcademicSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await AcademicSemesterService.createAcademicSemesterIntoDB(
      req.body
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Academic Semester is created succesfully",
      data: result,
    });
  }
);

const getAllAcademicSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await AcademicSemesterService.getAllAademicSemesterFromDB();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Academic Semesters are retrieved successfully",
      data: result,
    });
  }
);
const getSingleAcademicSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { semesterId } = req.params;
    const result = await AcademicSemesterService.getSingleAademicSemesterFromDB(
      semesterId
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Single Academic Semester is retrievd  succesfully",
      data: result,
    });
  }
);
const updateAcademicSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { semesterId } = req.params;
    const result = await AcademicSemesterService.updateAademicSemesterFromDB(
      semesterId,
      req.body
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Single Academic Semester is retrievd  succesfully",
      data: result,
    });
  }
);
export const AcademicSemesterControllers = {
  createAcademicSemester,
  getAllAcademicSemester,
  getSingleAcademicSemester,
  updateAcademicSemester,
};
