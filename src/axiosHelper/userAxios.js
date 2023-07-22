import axios from "axios";
const rootApi = process.env.REACT_APP_ROOTAPI;
const adminApi = rootApi + "/admin";

const axiosProcessor = async ({ method, url, obj }) => {
  try {
    const { data } = await axios({
      method,
      url,
      data: obj,
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
export const postNewAdmin = async (data) => {
  const obj = {
    method: "post",
    url: adminApi,
    obj: data,
  };
  return axiosProcessor(obj);
};

export const loginUser = async (logInData) => {
  const obj = {
    method: "post",
    url: adminApi + "/login",
    obj: logInData,
  };
  return axiosProcessor(obj);
};

export const verifyAccount = async (object) => {
  const obj = {
    method: "put",
    url: adminApi + "/verify",
    obj: object,
  };
  return axiosProcessor(obj);
};
