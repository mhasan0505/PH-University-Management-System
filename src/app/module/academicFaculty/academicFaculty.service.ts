import { TAcademicFaculty } from "./academicFaculty.inerface";
import { AcademicFaculty } from "./academicFaculty.model";

const createAcademicFacultyIntoDB = async (payload: TAcademicFaculty) => {
  const result = await AcademicFaculty.create(payload);
  return result;
};

const getAllAcademicFacultyIntoDB = async (payload: TAcademicFaculty) => {
  const result = await AcademicFaculty.find();
  return result;
};
const getSingleAcademicFacultyIntoDB = async (id: string) => {
  const result = await AcademicFaculty.findById(id);
  return result;
};
const updateAcademicFacultyIntoDB = async (
  Id: string,
  payload: Partial<TAcademicFaculty>
) => {
  const result = await AcademicFaculty.findByIdAndUpdate({ _id: Id }, payload, {
    new: true,
  });
  return result;
};
export const academicFacultyServices = {
  createAcademicFacultyIntoDB,
  getAllAcademicFacultyIntoDB,
  updateAcademicFacultyIntoDB,
  getSingleAcademicFacultyIntoDB,
};
