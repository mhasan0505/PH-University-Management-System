import config from "../../config";
import { TStudent } from "../student/student.interface";
import { Student } from "../student/student.model";
import { TUser } from "./user.interface";
import { User } from "./user.model";

const createStudentIntoDB = async (password: string, studentdata: TStudent) => {
  // create a user object
  const userData: Partial<TUser> = {};

  // if password is note given use default password
  userData.password = password || (config.default_password as string);

  //set student role

  userData.role = "student";

  //   set manually ID
  userData.id = "2030100001";

  //  create a user
  const newUser = await User.create(userData);

  // create a student
  if (Object.keys(newUser).length) {
    // set id , _id as user

    studentdata.id = newUser.id;
    studentdata.user = newUser._id; // reference ID

    const newStudent = await Student.create(studentdata);
    return newStudent;
  }
};
export const UserServices = {
  createStudentIntoDB,
};
