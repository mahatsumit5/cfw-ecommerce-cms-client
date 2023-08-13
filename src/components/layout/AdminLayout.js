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

      <div className="admin-layout">
        <SideBar />

        <main className="main">
          <div className="page-content p-2"> {children}</div>
        </main>
      </div>
      <Footer />
    </>
  );
};
