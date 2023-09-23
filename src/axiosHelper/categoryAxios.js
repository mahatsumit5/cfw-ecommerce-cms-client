import { axiosProcessor, rootApi } from "./userAxios";

const categoryApi = rootApi + "/api/v1/category";

export const postCategory = (category) => {
  const obj = {
    method: "post",
    url: categoryApi,
    obj: category,
    isPrivate: true,
  };
  return axiosProcessor(obj);
};
export const getCategories = (_id) => {
  console.log(_id);
  const obj = {
    method: "get",
    url: _id ? categoryApi + "/" + _id : categoryApi,
    isPrivate: true,
  };
  return axiosProcessor(obj);
};
export const deleteCatagory = (_id) => {
  const obj = {
    method: "delete",
    url: categoryApi,
    obj: _id,
    isPrivate: true,
  };
  return axiosProcessor(obj);
};
export const updateCatagory = (stat) => {
  const obj = {
    method: "put",
    url: categoryApi,
    obj: stat,
    isPrivate: true,
  };
  return axiosProcessor(obj);
};
