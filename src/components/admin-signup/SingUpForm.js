import { Button, Form, Row } from "react-bootstrap";
import { CustomeInput } from "../customeInput/CustomeInput";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { createUserAction } from "../../Action/userAction";
import { CustomToggleButton } from "../Toggle/ToggleButton";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
export const SingUpForm = () => {
  const [inputType, setInputType] = useState("password");
  const dispatch = useDispatch();
  const [form, setForm] = useState();
  const password = [
    {
      label: "Password",
      name: "password",
      required: true,
      placeholder: "min 8 char",
      type: inputType,
      minLength: "8",
      id: "password",
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      required: true,
      placeholder: " min 8 char",
      type: inputType,
      minLength: "8",
      className: "password-input",
    },
  ];
  const emailAndPhone = [
    {
      label: "Email",
      name: "email",
      required: true,
      placeholder: "john.smith@yahoo.com",
      type: "email",
      className: "label",
    },
    {
      label: "Phone",
      name: "phone",
      required: false,
      placeholder: "+61454987098",
      type: "string",
      className: "label",
    },
  ];
  const fAndLname = [
    {
      label: "First Name",
      name: "fName",
      required: true,
      placeholder: "John",
      type: "text",
      className: "label",
    },
    {
      label: "Last Name",
      name: "lName",
      required: false,
      placeholder: "Smith",
      type: "text",
      className: "label",
    },
  ];
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    const { confirmPassword, ...rest } = form;
    if (confirmPassword !== rest.password) {
      return toast.warning("Password do not match.");
    }
    dispatch(createUserAction(rest));
  };
  return (
    <Form className="p-5" onSubmit={handleOnSubmit}>
      <h1>Sign Up </h1>
      <div className="mt-5">
        <p className="sign">Sign up with</p>
        <div className="d-flex justify-content-between  mt-5 gap-2 ">
          <div className="border rounded  p-1">
            <Button variant="" className="fnb">
              <BsFacebook className="icon" />
              Sign up with Facebook
            </Button>
          </div>
          <div className="border rounded  p-1 ">
            <Button variant="" className="fnb">
              <FcGoogle className="icon" />
              Sign up with Google
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-5 d-flex  justify-content-between ">
        {fAndLname.map((item, index) => (
          <CustomeInput key={index} {...item} onChange={handleOnChange} />
        ))}
      </div>
      <div className=" mt-2 d-flex  justify-content-between">
        {emailAndPhone.map((item, index) => (
          <CustomeInput key={index} {...item} onChange={handleOnChange} />
        ))}
      </div>
      <div className="mt-2 d-flex  justify-content-between  ">
        {password.map((item, index) => (
          <CustomeInput key={index} {...item} onChange={handleOnChange} />
        ))}
      </div>
      <Form.Check // prettier-ignore
        type="checkbox"
        id="checkbox"
        label="I've read and agree with Terms of Service and our Privacy Policy"
        className="mt-2"
      />

      <CustomToggleButton
        ToggleButton={"toggleButton"}
        inputType={inputType}
        setInputType={setInputType}
      />

      <div className="d-grid mt-5">
        <Button type="submit">Create Account</Button>
      </div>
      <div className="mt-5 d-flex gap-2">
        <p>Already have an account?</p>
        <Link to="/" className="nav-link link">
          Sign in
        </Link>
      </div>
    </Form>
  );
};
