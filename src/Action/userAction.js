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
  const pendingResp = loginUser(userData);
  toast.promise(pendingResp, { Pending: "Please Wait" });

  const { status, message, user, token } = await pendingResp;
  toast[status](message);
  dispatch(setUser(user));
  if (status === "success") {
    sessionStorage.setItem("accesJWT", token.accessJWT);
    localStorage.setItem("accesJWT", token.refreshJWT);

    return true;
  }
};

export const verifyAccountAction = (obj) => async (dispatch) => {
  const pending = verifyAccount(obj);
  toast.promise(pending, { pending: "Please Wait" });
  const { status, message } = await pending;
  toast[status](message);
  const isverified =
    status === "success" || message === "Already verified" ? true : false;
  return isverified;
};
