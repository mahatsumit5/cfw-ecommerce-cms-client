import { postUser, loginUser } from "../axiosHelper/userAxios";
import { toast } from "react-toastify";

export const createUserAction = async (userObj) => {
  const { status, message } = await postUser(userObj);
  toast[status](message);
  //   rest of the dispatch funciton goes here
};
export const loginUserAction = async (userData) => {
  const { status, message, user } = await loginUser(userData);
  toast[status](message);
  // ?setUser(user)//this is for redux
};
