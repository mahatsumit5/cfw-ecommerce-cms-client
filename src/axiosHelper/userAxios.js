import axios from "axios";
const rootApi = "http://localhost:8000";
const userApi = rootApi + "/api/v1/user";

export const postUser = async (userObj) => {
  try {
    const { data } = await axios.post(userApi, userObj);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const loginUser = async (logInData) => {
  try {
    const { data } = await axios.post(userApi + "/login", logInData);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
