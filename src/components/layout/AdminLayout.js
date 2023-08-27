import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useSelector } from "react-redux";
import { SideBar } from "../sideBar/SideBar";

export const AdminLayout = ({ title, children }) => {
  const { user } = useSelector((state) => state.userInfo);

  return (
    <div className="d-flex">
      <SideBar />
      <div className="">
        <Header />
        <div className="admin-layout d-flex  w-100">
          <main className="main  px-5">
            <p className="text-secondary">{title}</p>
            <hr></hr>
            <div className="page-content p-2"> {children}</div>
          </main>
        </div>
        <Footer />
      </div>
    </div>
  );
};
