import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Row } from "react-bootstrap";
import { FiMenu } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { setCanvasShow } from "../../systemSlice";
export const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userInfo);
  return (
    <Row className="header shadow mx-auto ">
      <Navbar variant="" className="">
        <Link top="/" className="navbar-brand">
          <Button
            variant=""
            onClick={() => dispatch(setCanvasShow(true))}
            className="me-2 d-lg-none "
          >
            <FiMenu />
          </Button>
        </Link>
        <Row className="justify-content-center w-75 flex-row   m-auto">
          <Row className="search  w-75 m-auto mt-3">
            <Form.Control size="md" type="text" placeholder="Search" />
          </Row>
          <Row className="m-auto mt-3 " style={{ width: "60px" }}>
            <Link to="/profile" className="nav-link">
              <CgProfile /> {user?.fName}
            </Link>
          </Row>
        </Row>
      </Navbar>
    </Row>
  );
};
