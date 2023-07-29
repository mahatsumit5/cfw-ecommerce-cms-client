import { configureStore } from "@reduxjs/toolkit"; //this is for storing data in redux/toolkit
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// these will store data in webstorage
import userReducer from "./redux/userSlice";
import catagoryReducer from "./redux/catagorySlice";
import systemReducer from "./systemSlice";
const userpersistConfig = {
  key: "userInfo",
  storage,
};
const persistedUserReducer = persistReducer(userpersistConfig, userReducer);
export const store = configureStore({
  reducer: {
    userInfo: persistedUserReducer,
    tempuser: userReducer,
    catagoryInfo: catagoryReducer,
    //this data is removed every time browser reloads
    system: systemReducer,
  },
});
export const persistor = persistStore(store);
