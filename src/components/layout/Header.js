import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { BiSolidLogIn } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
export const Header = () => {
  return (
    <div>
      {" "}
      <Navbar expand="md" variant="dark" className="bg-dark">
        <Container>
          <Link top="/" className="navbar-brand">
            CFW
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to="/profile" className="nav-link">
                <CgProfile /> Profile
              </Link>
              <Link to="/" className="nav-link">
                <BiSolidLogIn />
                Log In
              </Link>
              <Link to="/new-admin" className="nav-link">
                Sign Up
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
