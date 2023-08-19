import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useSelector } from "react-redux";
import { SideBar } from "../sideBar/SideBar";

export const AdminLayout = ({ children }) => {
  const { user } = useSelector((state) => state.userInfo);

  return (
    <>
      <Header />

      <div className="admin-layout d-flex">
        <SideBar />

        <main className="main flex-grow-1  px-5">
          <div className="page-content p-2"> {children}</div>
        </main>
      </div>
      <Footer />
    </>
  );
};
