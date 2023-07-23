import { Button, Form } from "react-bootstrap";
import { CustomeInput } from "../customeInput/CustomeInput";
import { RiLoginCircleFill } from "react-icons/ri";
import { useState } from "react";
import { loginUserAction } from "../../Action/userAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
export const SignInFormComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState();
  const inputs = [
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
  ];
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const islogedIn = await dispatch(loginUserAction(form));
    islogedIn && navigate("/dashboard");
  };
  return (
    <div className="d-flex justify-content-cente flex-wrap form m-5 ">
      <Form
        className="m-5 p-5 border shadow-lg  rounded-4"
        onSubmit={handleOnSubmit}
      >
        <h1>
          <RiLoginCircleFill />
          Sign In{" "}
        </h1>
        {inputs.map((item, index) => (
          <CustomeInput key={index} {...item} onChange={handleOnChange} />
        ))}
        <div className="d-grid">
          <Button type="submit">Log In</Button>
        </div>
      </Form>
    </div>
  );
};
