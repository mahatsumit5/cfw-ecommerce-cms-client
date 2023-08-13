import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
export const RequestOTP = ({ handleOnOTPRequest }) => {
  const ref = useRef("");
  const handleOnClick = (e) => {
    const { value } = ref.current;
    if (value) {
      handleOnOTPRequest(value);
    }
  };
  return (
    <div>
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
              ref={ref}
            />
          </div>

          <Button
            variant="dark"
            className="form-submit-btn"
            onClick={handleOnClick}
          >
            Request OTP
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
    </div>
  );
};
