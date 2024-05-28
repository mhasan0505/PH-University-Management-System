import { Request, Response } from "express";


const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    const result = await UserServices.createStudentIntoDB(studentData);

    res.status(200).json({
      success: true,
      message: "Student is created succesfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};