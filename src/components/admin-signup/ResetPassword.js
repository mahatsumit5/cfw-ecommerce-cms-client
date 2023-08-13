import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
export const ResetPass = ({ email, handleOnResetPassword, setFormToShow }) => {
  const initialState = {
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [form, setform] = useState(initialState);
  const [error, setError] = useState("");
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setError("");
    if (name === "confirmPassword") {
      value !== form.password
        ? setError("Password do not  match")
        : setError("");
    }
    if (name === "password") {
      value.length < 8 && setError("Password must be at least 8 characters.");
      !/[0-9]/.test(value) && setError("one number is required");
      !/[A-Z]/.test(value) && setError("At least one Uppercase is required");
      !/[a-z]/.test(value) && setError("At least one Lowercase is required");
    }

    setform({
      ...form,
      [name]: value,
    });
  };
  const handleOnReset = (e) => {
    const obj = {
      email,
      otp: form.otp,
      password: form.password,
    };
    e.preventDefault();
    handleOnResetPassword(obj);
  };

  return (
    <div>
      <div className="form-container mt-2">
        <div className="logo-container">Change your password</div>

        <Form className="form" onSubmit={handleOnReset}>
          <div className="form-group">
            <Form.Label>OTP</Form.Label>
            <Form.Control
              type="TEXT"
              id="otp"
              name="otp"
              placeholder="Enter your CODE"
              required
              onChange={handleOnChange}
            />
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
              onChange={handleOnChange}
            />
            <Form.Label>Confirm Password</Form.Label>

            <Form.Control
              type="password"
              id="password"
              name="confirmPassword"
              placeholder="Confirm new password"
              required
              onChange={handleOnChange}
            />
          </div>

          <Button
            variant="dark"
            className="form-submit-btn"
            type="submit"
            disabled={error}
          >
            Change
          </Button>
          <p className="text-danger">{error}</p>
        </Form>
        <div className="text-end py-3">
          Didn't receive OTP?
          <a onClick={() => setFormToShow("otp")} href="#!">
            Request again.
          </a>
        </div>
      </div>
    </div>
  );
};
