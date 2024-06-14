import { TAcademicDepartment } from "./acdemicDepartment.interface";
import { AcademicDepartment } from "./acdemicDepartment.model";

const createAcademicDepartmentIntoDB = async (payload: TAcademicDepartment) => {
  const result = await AcademicDepartment.create(payload);
  return result;
};

const getAllAcademicDepartmentIntoDB = async (payload: TAcademicDepartment) => {
  const result = await AcademicDepartment.find();
  return result;
};
const getSingleAcademicDepartmentIntoDB = async (id: string) => {
  const result = await AcademicDepartment.findById(id);
  return result;
};
const updateAcademicDepartmentIntoDB = async (
  id: string,
  payload: Partial<TAcademicDepartment>
) => {
  const result = await AcademicDepartment.findByIdAndUpdate(
    { _id: id },
    payload,
    {
      new: true,
    }
  );
  return result;
};
export const academicDepartmentServices = {
  createAcademicDepartmentIntoDB,
  getAllAcademicDepartmentIntoDB,
  getSingleAcademicDepartmentIntoDB,
  updateAcademicDepartmentIntoDB,
};
