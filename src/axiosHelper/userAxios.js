import axios from "axios";
const rootApi = process.env.REACT_APP_ROOTAPI;
const adminApi = rootApi + "/admin";

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
