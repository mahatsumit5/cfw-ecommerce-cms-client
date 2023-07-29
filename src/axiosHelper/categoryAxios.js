import axios from "axios";
import { axiosProcessor } from "./userAxios";

const rootApi = process.env.REACT_APP_ROOTAPI;
const categoryApi = rootApi + "/category";

export const postCategory = (category) => {
  const obj = {
    method: "post",
    url: categoryApi,
    obj: category,
  };
  return axiosProcessor(obj);
};
export const getCategories = () => {
  const obj = {
    method: "get",
    url: `${rootApi}/category`,
  };
  return axiosProcessor(obj);
};
export const deleteCatagory = (_id) => {
  const obj = {
    method: "delete",
    url: categoryApi,
    obj: _id,
  };
  return axiosProcessor(obj);
};
export const updateCatagory = (stat) => {
  const obj = {
    method: "put",
    url: categoryApi,
    obj: stat,
  };
  return axiosProcessor(obj);
};
