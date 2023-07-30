import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
export const PrivateRoute = ({ children }) => {
  const location = useLocation();
  // console.log(location);
  // console.log(Navigate);
  const { user } = useSelector((state) => state.userInfo);
  return user?._id ? (
    children
  ) : (
    //passing props state with from as a property and location as a value which is later used in signform.js to access this value
    // in order to navigate user to the page when the open in the new tab
    <Navigate to="/" state={{ from: { location } }} />
  );
};
