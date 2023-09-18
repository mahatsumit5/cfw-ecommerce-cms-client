import { axiosProcessor } from "./userAxios";

const rootApi = process.env.REACT_APP_ROOTAPI;
const orderApi = rootApi + "/order";
export const getOrders = (_id) => {
  console.log(_id);
  const obj = {
    method: "get",
    url: _id ? orderApi + "/" + _id : orderApi,
    isPrivate: true,
  };
  return axiosProcessor(obj);
};

export const updateOrder = (dataToUpd) => {
  const obj = {
    method: "put",
    url: orderApi,
    obj: dataToUpd,
    isPrivate: true,
  };
  return axiosProcessor(obj);
};
