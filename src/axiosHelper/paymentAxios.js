import { axiosProcessor } from "./userAxios";

const rootApi = process.env.REACT_APP_ROOTAPI;
const paymentApi = rootApi + "/payment";

export const postPayment = (paymentObj) => {
  const obj = {
    method: "post",
    url: paymentApi,
    obj: paymentObj,
    isPrivate: true,
  };
  return axiosProcessor(obj);
};
export const getPayments = () => {
  const obj = {
    method: "get",
    url: paymentApi,
    isPrivate: true,
  };
  return axiosProcessor(obj);
};
export const deletePayment = (_id) => {
  const obj = {
    method: "delete",
    url: paymentApi,
    isPrivate: true,
    obj: _id,
  };
  return axiosProcessor(obj);
};
export const updatePayment = (status) => {
  const obj = {
    method: "put",
    url: paymentApi,
    obj: status,
    isPrivate: true,
  };
  return axiosProcessor(obj);
};
