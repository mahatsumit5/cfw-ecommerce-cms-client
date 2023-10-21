import { Button, Form } from "react-bootstrap";
import { CustomeInput } from "../customeInput/CustomeInput";
import { autoLogin, loginUserAction } from "../../Action/userAction";
import { useDispatch, useSelector } from "react-redux";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
const initialState = {
  password: localStorage.getItem("password"),
  email: localStorage.getItem("email"),
};
export const SignInFormComponent = () => {
  const location = useLocation();
  const pathTo = location?.state?.from?.location?.pathname || "/dashboard";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.userInfo);
  const [form, setForm] = useState(initialState);

  useEffect(() => {
    user?._id && navigate(pathTo);
    dispatch(autoLogin());
  }, [user, dispatch, navigate, pathTo]);

  const inputs = [
    {
      label: "Email",
      name: "email",
      required: true,
      placeholder: "smith_john@yahoo.com",
      type: "email",
      value: form.email,
    },
    {
      label: "Password",
      name: "password",
      required: true,
      placeholder: "******",
      type: "password",
      minLength: "8",
      value: form.password,
    },
  ];

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const islogedIn = await dispatch(loginUserAction(form));
    console.log(islogedIn);
    islogedIn && navigate("/dashboard");
  };
  const handleOnCheckBox = (e) => {
    const { checked } = e.target;
    checked && localStorage.setItem("email", form.email);
    checked && localStorage.setItem("password", form.password);
    !checked && localStorage.removeItem("email");
    !checked && localStorage.removeItem("password");
  };
  return (
    <div
      className="d-flex justify-content-center flex-wrap form "
      style={{ backdropFilter: "blur(10px)" }}
    >
      <Form
        className="p-4 border shadow-lg  rounded-4"
        onSubmit={handleOnSubmit}
      >
        <h1>Sign In </h1>
        {inputs.map((item, index) => (
          <CustomeInput key={index} {...item} onChange={handleOnChange} />
        ))}
        <div className="d-flex gap-2">
          <Form.Check
            type="checkbox"
            label="Remember me"
            id="checkbox"
            defaultChecked={false}
            onChange={handleOnCheckBox}
            className="form-label"
          />
        </div>
        <div className="d-grid mt-2 ">
          <Button
            type="submit"
            className="submitButton shadow-lg"
            variant="dark"
          >
            Log In
          </Button>
        </div>
        <div className="mt-2 p-1">
          <p className=" whiteText">
            <Link className="nav-link link" to="/reset-password">
              Forgot your password?
            </Link>
          </p>
        </div>
        <div className="d-flex justify-content-around mx-auto mt-1 ">
          <div className="whiteText">
            <Button variant="dark" className="fnb">
              <BsFacebook className="fbIcon" />
              Facebook
            </Button>
          </div>
          <div className="ms-5 whiteText">
            <Button variant="dark" className="fnb">
              <FcGoogle className="icon" />
              Google
            </Button>
          </div>
        </div>

        <div className="p-2 whiteText mt-3">
          <p className="form-label">
            No account?
            <Link className="nav-link link" to="/new-admin">
              Sign up
            </Link>
          </p>
        </div>
      </Form>
    </div>
  );
};
