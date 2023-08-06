import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Row } from "react-bootstrap";
import { FiMenu } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { BiSolidLogIn } from "react-icons/bi";
import { setCanvasShow } from "../../systemSlice";
import { SearchBar } from "../searchBar/SearchBar";
export const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userInfo);
  return (
    <Row className="header shadow m-auto ">
      <Navbar variant="" className="w-100">
        <Link top="/" className="navbar-brand">
          <Button
            variant=""
            onClick={() => dispatch(setCanvasShow(true))}
            className="me-2 d-lg-none "
          >
            <FiMenu />
          </Button>
        </Link>
        <Row className="w-100 flex-row   mx-auto">
          <Row className="search  w-50 m-auto ">
            <SearchBar />
          </Row>
          {user?._id && (
            <div
              className="mx-auto mt-3 d-flex flex-row gap-3"
              style={{ width: "60px" }}
            >
              <Link to="/profile" className="nav-link">
                <CgProfile className="text-2xl" />
              </Link>
              <Link to="/" className="nav-link">
                <BiSolidLogIn />
              </Link>
            </div>
          )}
        </Row>
      </Navbar>
    </Row>
  );
};
