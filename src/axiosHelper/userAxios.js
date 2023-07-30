import axios from "axios";
const rootApi = process.env.REACT_APP_ROOTAPI;
const adminApi = rootApi + "/admin";
const getAccessJWt = () => {
  return sessionStorage.getItem("acceesJWT");
};
export const axiosProcessor = async ({ method, url, obj, isPrivate }) => {
  const headers = {
    Authorization: isPrivate ? getAccessJWt() : null,
  };
  console.log(headers);
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
