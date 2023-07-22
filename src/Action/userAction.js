import {
  loginUser,
  postNewAdmin,
  verifyAccount,
} from "../axiosHelper/userAxios";
import { toast } from "react-toastify";

export const createUserAction = async (userObj) => {
  const { status, message } = await postNewAdmin(userObj);
  toast[status](message);
  //   rest of the dispatch funciton goes here
};
export const loginUserAction = async (userData) => {
  const { status, message, error } = await loginUser(userData);
  toast[status](message);
  console.log(status, error.message);
  // ?setUser(user)//this is for redux
};

export const verifyAccountAction = async (obj) => {
  const { status, message } = await verifyAccount(obj);
  toast[status](message);
};
