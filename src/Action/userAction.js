import {
  getAdmin,
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

  const { status, message, token } = await pendingResp;
  toast[status](message);
  if (status === "success") {
    sessionStorage.setItem("acceesJWT", token.accessJWT);
    localStorage.setItem("refreshJWT", token.refreshJWT);
    dispatch(getAdminProfileAction());
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

// getadmin aciton

export const getAdminProfileAction = () => async (dispatch) => {
  const { status, user } = await getAdmin();
  console.log(user);
  if (status === "success") {
    dispatch(setUser(user));
  }
};

export const autoLogin = () => async (dispatch) => {
  // check if accessJWT exist

  const accessJWT = sessionStorage.getItem("accesJWT");
  accessJWT && dispatch(getAdminProfileAction());
};
