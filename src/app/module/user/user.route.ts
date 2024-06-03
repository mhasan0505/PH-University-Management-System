import express, { NextFunction, Request, Response } from "express";

import { AnyZodObject } from "zod";
import { createStudentValidationSchema } from "../student/student.validation";
import { UserController } from "./user.controller";
const router = express.Router();

const validateRequest = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
      });
    } catch (err) {
      next(err);
    }

    next();
  };
};

router.post(
  "/create-student",
  validateRequest(createStudentValidationSchema),
  UserController.createStudent
);

export const UserRoutes = router;
