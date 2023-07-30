import { toast } from "react-toastify";
import {
  deleteCatagory,
  getCategories,
  postCategory,
  updateCatagory,
} from "../axiosHelper/categoryAxios";
import { setCatagory } from "../redux/catagorySlice";

export const postCatalogueAction = (obj) => async (dispatch) => {
  const pendingResp = postCategory(obj);
  toast.promise(pendingResp, { pending: "Please wait" });
  const { status, message } = await pendingResp;
  toast[status](message);
  dispatch(getCataloguesAction());
};
export const getCataloguesAction = () => async (dispatch) => {
  const { status, message, result } = await getCategories();
  if (status === "success") {
    dispatch(setCatagory(result));
    return true;
  } else return false;
};
export const deleteCatagoryAction = (_id) => async (dispatch) => {
  const { status, message } = await deleteCatagory(_id);
  dispatch(getCataloguesAction());
};
export const updateCatagoryAction = (stat) => async (dispatch) => {
  const { status, message } = await updateCatagory(stat);
  dispatch(getCataloguesAction());
};
