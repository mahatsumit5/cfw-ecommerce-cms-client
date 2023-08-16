import { Link, useNavigate } from "react-router-dom";
import { TbLayoutDashboard } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { FaUsers } from "react-icons/fa";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { BsFillBox2Fill } from "react-icons/bs";
import { BiSolidLogIn } from "react-icons/bi";
import { LiaCreditCardSolid, LiaTruckSolid } from "react-icons/lia";
import { FaMoneyBillAlt, FaUserSecret } from "react-icons/fa";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useDispatch, useSelector } from "react-redux";
import { setCanvasShow } from "../../systemSlice";
import { setUser } from "../../redux/userSlice";
import { Button, Row } from "react-bootstrap";
import { logoutUser } from "../../axiosHelper/userAxios";
import { useState } from "react";

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
      icon: <BsFillBox2Fill />,
      link: "dashboard",
    },
    {
      name: "Products",
      icon: <BsFillBox2Fill />,
      link: "products",
    },
    {
      name: "Customers",
      icon: <FaUsers />,
      link: "customers",
    },
    {
      name: "Sales",
      icon: <FaMoneyBillAlt />,
      link: "sales",
    },

    {
      name: "Catalogue",
      icon: <BiSolidCategoryAlt />,
      link: "catalogue",
    },
    {
      name: "Payment",
      icon: <LiaCreditCardSolid />,
      link: "payment",
    },
    {
      name: "Orders",
      icon: <LiaTruckSolid />,
      link: "orders",
    },
    {
      name: "Admin",
      icon: <FaUserSecret />,
      link: "admin",
    },
  ];
  const handleClose = (e) => {
    dispatch(setCanvasShow(false));
  };
  const handleOnClick = (e) => {
    const { value } = e.target;
    console.log(value);
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
      <Offcanvas show={canvasShow} onHide={handleClose} className="">
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
      </Offcanvas>
      {/* <div className="p-3  side-bar d-none d-lg-block ">
        <nav>
          <ul className="list-unstyled side-nav">
            {buttons.map((btn, i) => (
              <li className="mt-2 sidebar-link " key={i}>
                <Link to={`/` + btn.link} className="nav-link">
                  <Button
                    variant=""
                    onClick={handleOnClick}
                    value={btn.name}
                    active={
                      button.btnName === btn.name && button.isActive
                        ? true
                        : false
                    }
                  >
                    {btn.icon} {btn.name}
                  </Button>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Row className="logOut  ">
          <Link to="/" className="nav-link" onClick={handleOnSignOut}>
            <Button variant="">
              <BiSolidLogIn />
              Log out
            </Button>
          </Link>
        </Row>
      </div> */}
    </>
  );
};
