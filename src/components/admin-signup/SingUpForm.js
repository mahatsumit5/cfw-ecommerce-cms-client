import { Button, Form, ToggleButton } from "react-bootstrap";
import { CustomeInput } from "../customeInput/CustomeInput";
import { BiSolidUserDetail } from "react-icons/bi";
import { useState } from "react";
import { createUserAction } from "../../Action/userAction";
import { CustomToggleButton } from "../ToggleButton/ToggleButton";
export const SingUpForm = () => {
  const [form, setForm] = useState();
  const inputs = [
    {
      label: "First Name",
      name: "fName",
      required: true,
      placeholder: "John",
      type: "text",
    },
    {
      label: "Last Name",
      name: "lName",
      required: true,
      placeholder: "Smith",
      type: "text",
    },
    {
      label: "Phone ",
      name: "phone",
      placeholder: "+61452454986",
      type: "number",
    },
    {
      label: "Address",
      name: "address",
      placeholder: "222 George ST,NSW Sydney",
      type: "text",
    },
    {
      label: "Email",
      name: "email",
      required: true,
      placeholder: "smith_john@yahoo.com",
      type: "email",
    },
    {
      label: "Password",
      name: "password",
      required: true,
      placeholder: "******",
      type: "password",
      minLength: "8",
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      required: true,
      placeholder: "******",
      type: "password",
      minLength: "8",
    },
  ];
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      return window.alert("Password do not match.");
    }
    createUserAction(form);
  };
  return (
    <div className="d-flex justify-content-cente flex-wrap justify-content-center form">
      <Form
        className="m-5 p-5 border shadow-lg  rounded-4"
        onSubmit={handleOnSubmit}
      >
        <h1>
          <BiSolidUserDetail />
          Sign Up{" "}
        </h1>
        {inputs.map((item, index) => (
          <CustomeInput key={index} {...item} onChange={handleOnChange} />
        ))}
        <CustomToggleButton />
        <div className="d-grid">
          <Button type="submit">Create Account</Button>
        </div>
      </Form>
    </div>
  );
};
