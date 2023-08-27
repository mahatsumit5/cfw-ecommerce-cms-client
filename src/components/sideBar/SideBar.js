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
import { motion } from "framer-motion";
import { logoutUser } from "../../axiosHelper/userAxios";
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
      {/* <Offcanvas show={canvasShow} onHide={handleClose} className="">
        <Offcanvas.Header closeButton className="border p-3 shadow">
          <Offcanvas.Title>
            <Link to="/profile" className="nav-link">
              <Button onClick={handleClose} variant="">
                <CgProfile /> {user?.fName?.toUpperCase()}
              </Button>
            </Link>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="d-flex flex-column justify-content-between">
          <nav>
            <ul className="list-unstyled side-nav">
              {buttons.map((btn, i) => (
                <li className="mt-2 sidebar-link " key={i}>
                  <Link to={`/` + btn.link} className="nav-link">
                    <Button
                      className="fw-normal fs-6"
                      variant=""
                      onClick={handleClose}
                      value={btn.name}
                      active={button.isActive ? true : false}
                    >
                      {btn.icon} {btn.name}
                    </Button>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Row className="logOut p-3  shadow">
            <Link to="/" className="nav-link" onClick={handleOnSignOut}>
              <Button variant="">
                <BiSolidLogIn />
                Log out
              </Button>
            </Link>
          </Row>
        </Offcanvas.Body>
      </Offcanvas> */}
      <motion.div
        className=" shadow  side-bar "
        animate={{
          width: canvasShow ? "180px" : "80px ",
          transition: { duration: 0.4 },
        }}
      >
        <nav>
          <div className="px-3 mt-4 ">
            <Button
              variant=""
              onClick={() => dispatch(setCanvasShow(!canvasShow))}
              style={{ border: "none" }}
            >
              <FiMenu color="white" />
            </Button>
          </div>

          <ul className=" mt-5 list-unstyled side-nav">
            {buttons.map((btn, i) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                onHoverStart={(e) => {}}
                onHoverEnd={(e) => {}}
                className=" d-flex"
                key={i}
                style={{ height: "70px", position: "relative" }}
                isActive={{}}
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
          </ul>
          <Row className="logOut p-4 ">
            <Link to="/" className="nav-link" onClick={handleOnSignOut}>
              <Button
                variant=""
                style={{ border: "none" }}
                className="sidebar-button d-flex"
              >
                <BsFillLockFill color="white" />{" "}
                <motion.p
                  className="fs-6 fw-medium text-light"
                  initial={{ x: -10 }}
                  animate={{ x: 0, transition: { duration: 0.4 } }}
                >
                  {canvasShow && "logout"}
                </motion.p>
              </Button>
            </Link>
          </Row>
        </nav>
      </motion.div>
    </>
  );
};
