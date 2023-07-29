import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { BiSolidLogIn } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { persistor } from "../../store";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { setUser } from "../../redux/userSlice";
import { setCatagory } from "../../redux/catagorySlice";
export const Header = () => {
  const dispatch = useDispatch();

  const handleOnSignOut = () => {
    persistor.purge().then(() => {
      dispatch(setUser({}));
      dispatch(setCatagory({}));
      toast.success("You have been Logged Out.");
    });
  };
  const { user } = useSelector((state) => state.userInfo);
  return (
    <div>
      <Navbar expand="xl" variant="dark" className="bg-dark">
        <Container>
          <Link top="/" className="navbar-brand">
            CFW
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {user?._id ? (
                <>
                  {" "}
                  <Link to="/dashboard" className="nav-link">
                    Dashboard
                  </Link>
                  <Link to="/profile" className="nav-link">
                    <CgProfile /> Profile
                  </Link>
                  <Link to="/" className="nav-link" onClick={handleOnSignOut}>
                    <BiSolidLogIn />
                    Log out
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/" className="nav-link">
                    <BiSolidLogIn />
                    Log In
                  </Link>
                  <Link to="/new-admin" className="nav-link">
                    Sign Up
                  </Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
