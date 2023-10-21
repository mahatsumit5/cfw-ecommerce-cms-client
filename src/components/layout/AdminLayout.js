import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useSelector } from "react-redux";
import { SideBar } from "../sideBar/SideBar";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
export const AdminLayout = ({ title, children }) => {
  const { user } = useSelector((state) => state.userInfo);
  const { canvasShow } = useSelector((state) => state.system);

  return (
    <div>
      <motion.div
        animate={{
          width: canvasShow ? "180px" : "80px ",
          transition: { duration: 0.4 },
        }}
      >
        {" "}
        <Box
          sx={{
            display: {
              sm: "block",
              xs: canvasShow ? "block" : "none",
              md: "block",
            },
          }}
        >
          <SideBar />
        </Box>
      </motion.div>

      <Box className="admin-layout" sx={{ marginLeft: { xs: 0, sm: "80px" } }}>
        <Header />
        <main className="main p-2 ">
          <p className="text-secondary">{title}</p>

          <div className="page-content "> {children}</div>
        </main>
        <Footer />
      </Box>
    </div>
  );
};
