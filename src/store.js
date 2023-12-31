import { configureStore } from "@reduxjs/toolkit"; //this is for storing data in redux/toolkit
// these will store data in webstorage
import userReducer from "./redux/userSlice";
import catagoryReducer from "./redux/catagorySlice";
import systemReducer from "./systemSlice";
import paymentReducer from "./redux/paymentSlice";
import displayTableReducer from "./redux/displaySlice";
import productReducer from "./redux/productSlice";
import orderReducer from "./redux/orderSlice";

export const store = configureStore({
  reducer: {
    userInfo: userReducer,
    catagoryInfo: catagoryReducer,
    system: systemReducer,
    payments: paymentReducer,
    displayTableData: displayTableReducer,
    productsData: productReducer,
    orderData: orderReducer,
  },
});
