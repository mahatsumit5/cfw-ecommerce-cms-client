import { Button, Form } from "react-bootstrap";
import { CustomeInput } from "../customeInput/CustomeInput";
import { BiSolidUserDetail } from "react-icons/bi";
import { useState } from "react";

export const SingUpForm = () => {
  const [form, setForm] = useState();
  const inputs = [
    {
      label: "First Name",
      name: "fName",
      required: true,
      placeholder: "Sumit",
      type: "text",
    },
    {
      label: "Last Name",
      name: "lName",
      required: true,
      placeholder: "Mahat",
      type: "text",
    },
    {
      label: "Phone ",
      name: "phone",
      placeholder: "04123456",
      type: "number",
    },
    {
      label: "Address",
      name: "address",
      placeholder: "222 george st Sydeny",
      type: "text",
    },
    {
      label: "Email",
      name: "email",
      required: true,
      placeholder: "Sam@smit.com",
      type: "email",
    },
    {
      label: "Password",
      name: "password",
      required: true,
      placeholder: "******",
      type: "password",
      minLength: "6",
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      required: true,
      placeholder: "******",
      type: "password",
      minLength: "6",
    },
  ];
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form); // form data here...
  };
  return (
    <div className="">
      <Form className="m-5 p-5 border shadow-lg" onSubmit={handleOnSubmit}>
        <h1>
          <BiSolidUserDetail />
          Create New Account
        </h1>
        {inputs.map((item, index) => (
          <CustomeInput key={index} {...item} onChange={handleOnChange} />
        ))}
        <div className="d-grid">
          <Button type="submit">Submit</Button>
        </div>
      </Form>
    </div>
  );
};
