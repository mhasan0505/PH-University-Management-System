import { academicSemesterNameCodeMapper } from "./academicSemester.Constant";
import { TAcademicSemester } from "./academicSemester.interface";
import { AcademicSemester } from "./academicSemester.model";

// create
const createAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {
  if (academicSemesterNameCodeMapper[payload.name] !== payload.code) {
    throw new Error("Invalid Semester Code");
  }

  const result = await AcademicSemester.create(payload);
  return result;
};

// get all
const getAllAademicSemesterFromDB = async () => {
  const result = await AcademicSemester.find();
  return result;
};

// get single
const getSingleAademicSemesterFromDB = async (id: string) => {
  const result = await AcademicSemester.findById(id);
  return result;
};

// update data

const updateAademicSemesterFromDB = async (
  id: string,
  payload: Partial<TAcademicSemester>
) => {
  if (
    payload.name &&
    payload.code &&
    academicSemesterNameCodeMapper[payload.name] !== payload.code
  ) {
    throw new Error("Invalid Semester Code ");
  }

  const result = await AcademicSemester.findByIdAndUpdate(
    { _id: id },
    payload,
    { new: true }
  );
  return result;
};

export const AcademicSemesterService = {
  createAcademicSemesterIntoDB,
  getAllAademicSemesterFromDB,
  getSingleAademicSemesterFromDB,
  updateAademicSemesterFromDB,
};
