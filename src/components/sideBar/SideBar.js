import { Link, useNavigate } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

import { FaUsers } from "react-icons/fa";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { BsFillBox2Fill, BsPersonFill, BsFillLockFill } from "react-icons/bs";
import { LiaCreditCardSolid, LiaTruckSolid } from "react-icons/lia";
import { FaMoneyBillAlt, FaUserSecret } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setCanvasShow } from "../../systemSlice";
import { Button, Row } from "react-bootstrap";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { logoutUser } from "../../axiosHelper/userAxios";
import { setUser } from "../../redux/userSlice";
export const SideBar = () => {
  let btnName = "";
  const [button, setButton] = useState({
    btnName,
    isActive: false,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { canvasShow } = useSelector((state) => state.system);
  const { user } = useSelector((state) => state.userInfo);
  const buttons = [
    {
      name: "Dashboard",
      icon: <BsFillBox2Fill color="white" />,
      link: "dashboard",
    },
    {
      name: "Products",
      icon: <BsFillBox2Fill color="white" />,
      link: "products",
    },
    {
      name: "Customers",
      icon: <FaUsers color="white" />,
      link: "customers",
    },
    {
      name: "Sales",
      icon: <FaMoneyBillAlt color="white" />,
      link: "sales",
    },

    {
      name: "Catalogue",
      icon: <BiSolidCategoryAlt color="white" />,
      link: "catalogue",
    },
    {
      name: "Payment",
      icon: <LiaCreditCardSolid color="white" />,
      link: "payment",
    },
    {
      name: "Orders",
      icon: <LiaTruckSolid color="white" />,
      link: "orders",
    },
    {
      name: "Admin",
      icon: <FaUserSecret color="white" />,
      link: "admin",
    },
    {
      name: "Profile",
      icon: <BsPersonFill color="white" />,
      link: "profile",
    },
  ];
  const handleOnClick = (e) => {
    const { value } = e.target;
    setButton({
      btnName: value,
      isActive: true,
    });
    dispatch(setCanvasShow(!canvasShow));
  };
  const handleOnSignOut = () => {
    logoutUser(user._id);
    //clear storages
    localStorage.removeItem("refreshJWT");
    sessionStorage.removeItem("accessJWT");
    console.log("inside handle of click");
    dispatch(setUser({}));
    navigate("/");
  };

  return (
    <>
      <AnimatePresence>
        <motion.div
          className="side-bar "
          animate={{
            width: canvasShow ? "180px" : "85px ",
            transition: { duration: 0.4 },
          }}
        >
          <nav className=" h-100">
            <ul
              className=" h-100 list-unstyled side-nav d-flex flex-column justify-content-between "
              // style={{ overflow: "scroll" }}
            >
              <motion.li
                whileHover={{ scale: 1.1 }}
                onHoverStart={(e) => {}}
                onHoverEnd={(e) => {}}
                className=" "
                style={{ height: "70px", position: "relative" }}
              >
                <Button
                  variant=""
                  onClick={() => dispatch(setCanvasShow(!canvasShow))}
                  style={{ border: "none" }}
                >
                  <FiMenu color="white" />
                </Button>
              </motion.li>
              {buttons.map((btn, i) => (
                <motion.li
                  whileHover={{ scale: 1.1 }}
                  onHoverStart={(e) => {}}
                  onHoverEnd={(e) => {}}
                  className=" d-flex"
                  key={i}
                  style={{ height: "70px", position: "relative" }}
                >
                  <Link
                    to={`/` + btn.link}
                    className=" nav-link  "
                    style={{ width: "180px" }}
                  >
                    <Button
                      variant=""
                      onClick={handleOnClick}
                      value={btn.name}
                      active={
                        button.btnName === btn.name && button.isActive
                          ? true
                          : false
                      }
                      className="sidebar-button d-flex"
                      style={{ border: "none" }}
                    >
                      {btn.icon}
                      <motion.p
                        className="fs-6 fw-medium text-light"
                        initial={{ x: -10 }}
                        animate={{ x: 0, transition: { duration: 0.4 } }}
                      >
                        {canvasShow && btn.name}
                      </motion.p>
                    </Button>
                  </Link>
                  {!canvasShow && (
                    <Link to={`/` + btn.link} className=" nav-link  ">
                      <Button
                        variant=""
                        style={{
                          position: "absolute",
                          left: "0px",
                          background: " #5b6dd7",
                          color: "white",
                          border: "none",
                        }}
                        className="hoverButton fs-6 fw-medium "
                      >
                        {btn.name}
                      </Button>
                    </Link>
                  )}
                </motion.li>
              ))}
              <motion.li>
                <Button
                  variant=""
                  style={{ border: "none" }}
                  className="sidebar-button d-flex"
                  onClick={handleOnSignOut}
                >
                  <BsFillLockFill color="white" />,
                  <motion.p
                    className="fs-6 fw-medium text-light"
                    initial={{ x: -10 }}
                    animate={{ x: 0, transition: { duration: 0.4 } }}
                  >
                    {canvasShow && "logout"}
                  </motion.p>
                </Button>
              </motion.li>
            </ul>
          </nav>
        </motion.div>
      </AnimatePresence>
    </>
  );
};
