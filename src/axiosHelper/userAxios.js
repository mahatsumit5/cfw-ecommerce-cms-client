import axios from "axios";
export const rootApi =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8000"
    : process.env.REACT_APP_ROOTSERVER;
const adminApi = rootApi + "/api/v1/admin";
const clientApi = process.env.REACT_APP_CLIENT_API;
const getAccessJWt = () => {
  return sessionStorage.getItem("accessJWT");
};
const getRefreshJWT = () => {
  return localStorage.getItem("refreshJWT");
};
export const axiosProcessor = async ({
  method,
  url,
  obj,
  isPrivate,
  refreshToken,
}) => {
  const token = refreshToken ? getRefreshJWT() : getAccessJWt();
  const headers = {
    Authorization: isPrivate ? token : null,
  };
  try {
    const { data } = await axios({
      method,
      url,
      data: obj,
      headers,
    });
    return data;
  } catch (error) {
    if (
      error?.response?.status === 403 &&
      error?.response?.data?.message ===
        "Your token has expired. Please login Again"
    ) {
      // 1. get new access Jwt
      const { status, accessJWT } = await getNewAccessJWT();
      if (status === "success") {
        sessionStorage.setItem("accessJWT", accessJWT);
        return axiosProcessor({ method, url, obj, isPrivate, refreshToken });
      }
    }
    if (error?.response?.data?.message === "jwt expired") {
      console.log("refresh token expired");
      // logoutUser();
    }
    return {
      status: "error",
      message: error.response ? error?.response?.data?.message : error.message,
      error,
    };
  }
};

// create user
export const postNewAdmin = (data) => {
  const obj = {
    method: "post",
    url: adminApi,
    obj: data,
    isPrivate: true,
  };
  return axiosProcessor(obj);
};
export const getAllAdmins = () => {
  const obj = {
    method: "get",
    url: adminApi + "/get-admins",
    isPrivate: true,
  };
  return axiosProcessor(obj);
};
export const getAllUsers = () => {
  const obj = {
    method: "get",
    url: clientApi,
    isPrivate: true,
  };
  return axiosProcessor(obj);
};
export const updateUser = (data) => {
  const { oldPassword, newPassword } = data;
  console.log(oldPassword, newPassword);
  const obj = {
    method: "put",
    url: oldPassword && newPassword ? adminApi + "/change-password" : adminApi,
    obj: data,
    isPrivate: true,
  };
  return axiosProcessor(obj);
};
export const getAdmin = () => {
  const obj = {
    method: "get",
    url: adminApi,
    isPrivate: true,
  };
  return axiosProcessor(obj);
};

export const loginUser = (logInData) => {
  const obj = {
    method: "post",
    url: adminApi + "/login",
    obj: logInData,
  };
  return axiosProcessor(obj);
};

export const verifyAccount = (object) => {
  const obj = {
    method: "put",
    url: adminApi + "/verify",
    obj: object,
  };
  return axiosProcessor(obj);
};

export const getNewAccessJWT = () => {
  //refreshtoken is sent to get access token
  const obj = {
    method: "get",
    url: adminApi + "/get-accessjwt",
    isPrivate: true,
    refreshToken: true,
  };
  return axiosProcessor(obj);
};

export const logoutUser = (_id) => {
  const obj = {
    method: "post",
    url: adminApi + "/logout",
    obj: {
      _id,
      accessJWT: getAccessJWt(),
      refreshJWT: getRefreshJWT(),
    },
  };
  return axiosProcessor(obj);
};

export const reqOTP = (email) => {
  const obj = {
    method: "post",
    url: adminApi + "/request-otp",
    obj: { email },
  };
  return axiosProcessor(obj);
};
export const changePassword = (formObj) => {
  console.log(formObj);
  const obj = {
    method: "post",
    url: adminApi + "/change-password",
    obj: formObj,
  };
  return axiosProcessor(obj);
};
