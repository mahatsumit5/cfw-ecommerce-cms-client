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
export const getProducts = () => {
  const obj = {
    method: "get",
    url: productApi,
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
export const updatePayment = (status) => {
  const obj = {
    method: "put",
    url: productApi,
    obj: status,
    isPrivate: true,
  };
  return axiosProcessor(obj);
};
