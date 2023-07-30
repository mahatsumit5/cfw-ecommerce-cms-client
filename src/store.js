import { configureStore } from "@reduxjs/toolkit"; //this is for storing data in redux/toolkit
// these will store data in webstorage
import userReducer from "./redux/userSlice";
import catagoryReducer from "./redux/catagorySlice";
import systemReducer from "./systemSlice";

export const store = configureStore({
  reducer: {
    userInfo: userReducer,
    catagoryInfo: catagoryReducer,
    system: systemReducer,
  },
});
