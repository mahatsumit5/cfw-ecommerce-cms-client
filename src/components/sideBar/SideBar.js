import { Link } from "react-router-dom";
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
import { persistor } from "../../store";
import { setUser } from "../../redux/userSlice";
import { setCatagory } from "../../redux/catagorySlice";
import { toast } from "react-toastify";
import { Button, Row } from "react-bootstrap";

export const SideBar = () => {
  const dispatch = useDispatch();
  const { canvasShow } = useSelector((state) => state.system);
  const { user } = useSelector((state) => state.userInfo);

  const handleClose = () => dispatch(setCanvasShow(false));

  const handleOnSignOut = () => {
    persistor.purge().then(() => {
      dispatch(setUser({}));
      dispatch(setCatagory({}));
      toast.success("You have been Logged Out.");
    });
  };

  return (
    <>
      <Offcanvas show={canvasShow} onHide={handleClose} className="d-lg-none">
        <Offcanvas.Header closeButton className="border p-3 shadow">
          <Offcanvas.Title>
            <Link to="/profile" className="nav-link">
              <CgProfile /> {user?.fName}
            </Link>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="d-flex flex-column justify-content-between">
          <nav>
            <ul className="list-unstyled side-nav">
              <li className="mt-2">
                <Link to="/dashboard" className="nav-link">
                  <Button variant="" onClick={handleClose}>
                    {" "}
                    <TbLayoutDashboard /> Dashboard
                  </Button>
                </Link>
              </li>

              <li className="mt-2">
                <Link to="/products" className="nav-link">
                  <Button variant="" onClick={handleClose}>
                    {" "}
                    <BsFillBox2Fill />
                    Products
                  </Button>
                </Link>
              </li>
              <li className="mt-2">
                <Link to="/customers" className="nav-link">
                  <Button variant="" onClick={handleClose}>
                    <FaUsers />
                    Customers
                  </Button>
                </Link>
              </li>
              <li className="mt-2">
                <Link to="/sales" className="nav-link">
                  <Button variant="" onClick={handleClose}>
                    {" "}
                    <FaMoneyBillAlt /> Sales
                  </Button>
                </Link>
              </li>
              <li className="mt-2">
                <Link to="/catalogue" className="nav-link">
                  <Button variant="" onClick={handleClose}>
                    {" "}
                    <BiSolidCategoryAlt />
                    Catalogue
                  </Button>
                </Link>
              </li>

              <li className="mt-2">
                <Link to="/payment" className="nav-link">
                  <Button variant="" onClick={handleClose}>
                    {" "}
                    <LiaCreditCardSolid /> Payment
                  </Button>
                </Link>
              </li>

              <li className="mt-2">
                <Link to="/orders" className="nav-link">
                  <Button variant="" onClick={handleClose}>
                    <LiaTruckSolid />
                    Orders
                  </Button>
                </Link>
              </li>
              <hr></hr>
              <li className="mt-2">
                <Link to="/admin" className="nav-link">
                  <Button variant="" onClick={handleClose}>
                    {" "}
                    <FaUserSecret />
                    Admin Users
                  </Button>
                </Link>
              </li>
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
      <div className="p-3  side-bar d-none d-lg-block ">
        <nav>
          <ul className="list-unstyled side-nav">
            <li className="mt-2">
              <Link to="/dashboard" className="nav-link">
                <Button variant="" onClick={handleClose}>
                  {" "}
                  <TbLayoutDashboard /> Dashboard
                </Button>
              </Link>
            </li>

            <li className="mt-2">
              <Link to="/products" className="nav-link">
                <Button variant="" onClick={handleClose}>
                  {" "}
                  <BsFillBox2Fill />
                  Products
                </Button>
              </Link>
            </li>
            <li className="mt-2">
              <Link to="/customers" className="nav-link">
                <Button variant="" onClick={handleClose}>
                  <FaUsers />
                  Customers
                </Button>
              </Link>
            </li>
            <li className="mt-2">
              <Link to="/sales" className="nav-link">
                <Button variant="" onClick={handleClose}>
                  {" "}
                  <FaMoneyBillAlt /> Sales
                </Button>
              </Link>
            </li>
            <li className="mt-2">
              <Link to="/catalogue" className="nav-link">
                <Button variant="" onClick={handleClose}>
                  {" "}
                  <BiSolidCategoryAlt />
                  Catalogue
                </Button>
              </Link>
            </li>

            <li className="mt-2">
              <Link to="/payment" className="nav-link">
                <Button variant="" onClick={handleClose}>
                  {" "}
                  <LiaCreditCardSolid /> Payment
                </Button>
              </Link>
            </li>

            <li className="mt-2">
              <Link to="/orders" className="nav-link">
                <Button variant="" onClick={handleClose}>
                  <LiaTruckSolid />
                  Orders
                </Button>
              </Link>
            </li>
            <hr></hr>
            <li className="mt-2">
              <Link to="/admin" className="nav-link">
                <Button variant="" onClick={handleClose}>
                  {" "}
                  <FaUserSecret />
                  Admin Users
                </Button>
              </Link>
            </li>
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
      </div>
    </>
  );
};
