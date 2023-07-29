import { Button, Form } from "react-bootstrap";
import { CustomeInput } from "../customeInput/CustomeInput";
import { RiLoginCircleFill } from "react-icons/ri";
import { useState } from "react";
import { loginUserAction } from "../../Action/userAction";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
const initialState = {
  email: "",
  password: "",
};
export const SignInFormComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState(initialState);
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
    console.log(islogedIn);
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
          <Button type="submit" variant="dark">
            {" "}
            Log In
          </Button>
        </div>
        <div className="p-3">
          <p className="text-center">
            Forgot your password? <Link to="/reset-password">Reset Now</Link>
          </p>
        </div>
      </Form>
    </div>
  );
};
