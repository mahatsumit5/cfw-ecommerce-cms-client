import { Link, useNavigate } from "react-router-dom";

import { FaUsers } from "react-icons/fa";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { BsFillBox2Fill } from "react-icons/bs";
import { LiaCreditCardSolid, LiaTruckSolid } from "react-icons/lia";
import { FaMoneyBillAlt, FaUserSecret } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setCanvasShow } from "../../systemSlice";
import { setUser } from "../../redux/userSlice";
import { Button, Row } from "react-bootstrap";
import { logoutUser } from "../../axiosHelper/userAxios";
import { useState } from "react";
import { motion } from "framer-motion";
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
      icon: <BsFillBox2Fill color="#0000FF" />,
      link: "dashboard",
    },
    {
      name: "Products",
      icon: <BsFillBox2Fill color="#0000FF" />,
      link: "products",
    },
    {
      name: "Customers",
      icon: <FaUsers color="#0000FF" />,
      link: "customers",
    },
    {
      name: "Sales",
      icon: <FaMoneyBillAlt color="#0000FF" />,
      link: "sales",
    },

    {
      name: "Catalogue",
      icon: <BiSolidCategoryAlt color="#0000FF" />,
      link: "catalogue",
    },
    {
      name: "Payment",
      icon: <LiaCreditCardSolid color="#0000FF" />,
      link: "payment",
    },
    {
      name: "Orders",
      icon: <LiaTruckSolid color="#0000FF" />,
      link: "orders",
    },
    {
      name: "Admin",
      icon: <FaUserSecret color="#0000FF" />,
      link: "admin",
    },
  ];
  const handleClose = () => {
    dispatch(setCanvasShow(false));
  };
  const handleOnClick = (e) => {
    const { value } = e.target;
    setButton({
      btnName: value,
      isActive: true,
    });
    handleClose();
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
        className="border side-bar "
        animate={{
          width: canvasShow ? "230px" : "80px ",
          transition: { duration: 0.5 },
        }}
      >
        <nav>
          <ul className=" mt-3 list-unstyled side-nav">
            {buttons.map((btn, i) => (
              <motion.li
                whileHover={{ scale: 1.2 }}
                onHoverStart={(e) => {}}
                onHoverEnd={(e) => {}}
                className=""
                key={i}
                style={{ height: "70px" }}
                isActive={{}}
              >
                <Link to={`/` + btn.link} className="nav-link ">
                  <Button
                    variant=""
                    onDoubleClick={handleOnClick}
                    value={btn.name}
                    active={
                      button.btnName === btn.name && button.isActive
                        ? true
                        : false
                    }
                    className="sidebar-button"
                  >
                    {btn.icon}
                    <p className="fs-6 fw-medium text-primary">
                      {canvasShow && btn.name}
                    </p>
                  </Button>
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </>
  );
};
