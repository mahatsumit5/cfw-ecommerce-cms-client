import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useSelector } from "react-redux";
import { SideBar } from "../sideBar/SideBar";

export const AdminLayout = ({ children }) => {
  const { user } = useSelector((state) => state.userInfo);

  return (
    <div className="admin-layout">
      {user?._id && user?.status === "active" ? (
        <>
          {" "}
          <Header />
          <main className="main">
            <SideBar />

            <div className="page-content"> {children}</div>
          </main>
          <Footer />
        </>
      ) : (
        <>
          <h1>Access denied for unverified users</h1>
        </>
      )}
    </div>
  );
};
