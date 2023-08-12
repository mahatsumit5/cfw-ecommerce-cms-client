import { axiosProcessor } from "./userAxios";

const rootApi = process.env.REACT_APP_ROOTAPI;
const productApi = rootApi + "/product";

export const postProduct = (productObj) => {
  const obj = {
    method: "post",
    url: productApi,
    obj: productObj,
    isPrivate: true,
  };
  return axiosProcessor(obj);
};
export const getProducts = (_id) => {
  const obj = {
    method: "get",
    url: _id ? productApi + "/" + _id : productApi,
    isPrivate: true,
  };
  return axiosProcessor(obj);
};
export const deleteProduct = (_id) => {
  console.log(_id);
  const obj = {
    method: "delete",
    url: productApi + "/" + _id,
    isPrivate: true,
  };
  return axiosProcessor(obj);
};
export const updateProduct = (data) => {
  console.log(data);
  const obj = {
    method: "put",
    url: productApi,
    obj: data,
    isPrivate: true,
  };
  return axiosProcessor(obj);
};
