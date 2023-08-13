import {
  getAdmin,
  getNewAccessJWT,
  loginUser,
  postNewAdmin,
  updateUser,
  verifyAccount,
} from "../axiosHelper/userAxios";
import { toast } from "react-toastify";
import { setUser } from "../redux/userSlice";

export const createUserAction = (userObj) => async (dispatch) => {
  const pendingResp = postNewAdmin(userObj);
  toast.promise(pendingResp, { Pending: "Please Wait" });
  const { status, message } = await pendingResp;
  toast[status](message);
};
export const updateUserAction = (userObj) => async (dispatch) => {
  const pendingResp = updateUser(userObj);
  toast.promise(pendingResp, { Pending: "Please Wait" });
  const { status, message } = await pendingResp;
  toast[status](message);
  dispatch(getAdminProfileAction());
};
export const loginUserAction = (userData) => async (dispatch) => {
  const pendingResp = loginUser(userData);
  toast.promise(pendingResp, { Pending: "Please Wait" });

  const { status, message, token } = await pendingResp;
  toast[status](message);
  if (status === "success") {
    sessionStorage.setItem("accessJWT", token.accessJWT); ///active for 5mins
    localStorage.setItem("refreshJWT", token.refreshJWT); //active for 30days
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
  //call the api to get user info
  const { status, user } = await getAdmin();
  //mount the state with the user data
  if (status === "success") {
    dispatch(setUser(user));
  }
};

export const autoLogin = () => async (dispatch) => {
  // check if accessJWT exist
  const accessJWT = sessionStorage.getItem("accessJWT");
  if (accessJWT) {
    return dispatch(getAdminProfileAction());
  }
  const refreshJWT = localStorage.getItem("refreshJWT");
  if (refreshJWT) {
    // request new session token form the server
    const { accessJWT } = await getNewAccessJWT();
    if (accessJWT) {
      sessionStorage.setItem("accessJWT", accessJWT);
    }
    dispatch(getAdminProfileAction());
  }
};
