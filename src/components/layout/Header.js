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
    <Navbar className="px-5  gap-5 d-flex header shadow justify-content-between w-100 ">
      <div className="d-flex  ">
        <Button
          variant=""
          onClick={() => dispatch(setCanvasShow(true))}
          className="me-2  "
        >
          <FiMenu />
        </Button>
        <Link to="/" className="navbar-brand">
          <h2> CFW</h2>
        </Link>
      </div>

      <div className=" flex-fill ms-5   rounded">
        <SearchBar />
      </div>

      {user?._id && (
        <div className="d-flex gap-2  p-2  rounded 	d-none d-xxl-block bg-dark text-light">
          <Link to="/profile" className=" d-flex nav-link gap-2">
            <CgProfile className="text-2xl" /> <h4>Profile</h4>
          </Link>
        </div>
      )}
    </Navbar>
  );
};
