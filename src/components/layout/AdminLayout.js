import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { SideBar } from "../sideBar/SideBar";
import { useSelector } from "react-redux";

export const AdminLayout = ({ children, title }) => {
  const { user } = useSelector((state) => state.userInfo);

  return (
    <div className="admin-layout">
      {user?._id && user?.status === "active" ? (
        <>
          {" "}
          <SideBar />
          <main className="main">
            <Header />
            <h1>{title}</h1>
            <hr></hr>
            <div className="page-content"> {children}</div>
            <Footer />
          </main>
        </>
      ) : (
        <>
          <h1>Access denied for unverified users</h1>
        </>
      )}
    </div>
  );
};
