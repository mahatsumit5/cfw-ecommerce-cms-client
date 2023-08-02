import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Reset.css";
import { AdminLayout } from "../../components/layout/AdminLayout";
export const ResetPassPage = () => {
  return (
    <div className=" signin  ">
      <main className="main">
        <div className="form-container">
          <div className="logo-container">Forgot Password</div>

          <Form className="form">
            <div className="form-group">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <Button variant="dark" className="form-submit-btn" type="submit">
              Send Email
            </Button>
          </Form>

          <p className="signup-link">
            Don't have an account?
            <Link to="/new-admin" className="signup-link link">
              {" "}
              Sign up now
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};
