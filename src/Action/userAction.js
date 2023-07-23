import {
  loginUser,
  postNewAdmin,
  verifyAccount,
} from "../axiosHelper/userAxios";
import { toast } from "react-toastify";
import { setUser } from "../redux/userSlice";

export const createUserAction = (userObj) => async (dispatch) => {
  const pendingResp = postNewAdmin(userObj);
  toast.promise(pendingResp, { Pending: "Please Wait" });
  const { status, message } = await pendingResp;
  toast[status](message);
  //   rest of the dispatch funciton goes here
};
export const loginUserAction = (userData) => async (dispatch) => {
  const { status, message, user } = await loginUser(userData);
  toast[status](message);
  dispatch(setUser(user));
  if (status === "success") return true;
};

export const verifyAccountAction = (obj) => async (dispatch) => {
  const pending = verifyAccount(obj);
  toast.promise(pending, { pending: "Please Wait" });
  const { status, message } = await pending;
  toast[status](message);
  if (status === "success") {
    return true;
  }
};
