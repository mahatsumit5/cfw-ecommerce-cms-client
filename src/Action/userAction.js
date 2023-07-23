import {
  loginUser,
  postNewAdmin,
  verifyAccount,
} from "../axiosHelper/userAxios";
import { toast } from "react-toastify";

export const createUserAction = async (userObj) => {
  const pendingResp = postNewAdmin(userObj);
  toast.promise(pendingResp, { Pending: "Please Wait" });
  const { status, message } = await pendingResp;
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
  const pending = verifyAccount(obj);
  toast.promise(pending, { pending: "Please Wait" });
  const { status, message } = await pending;
  toast[status](message);
  if (status === "success") {
    return true;
  }
};
