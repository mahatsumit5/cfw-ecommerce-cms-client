import React, { useState } from "react";
import { Form } from "react-bootstrap";

export const CustomToggleButton = ({ ToggleButton, setInputType }) => {
  const [toggle, setToggle] = useState("off");
  const handleShowPassword = (e) => {
    const { value } = e.target;
    if (value === "off") {
      setToggle("on");
      setInputType("text");
    } else {
      setToggle("off");
      setInputType("password");
    }
  };
  return (
    <div className={ToggleButton}>
      <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        onChange={handleShowPassword}
        value={toggle}
      />
    </div>
  );
};
