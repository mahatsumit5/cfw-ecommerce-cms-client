import React, { useState } from "react";
import { Form } from "react-bootstrap";

export const CustomToggleButton = () => {
  const [toggle, setToggle] = useState("off");
  const handleShowPassword = (e) => {
    const { value } = e.target;
    value === "off" ? setToggle("on") : setToggle("off");
  };
  console.log(toggle);

  return (
    <div>
      <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        label="Show Password"
        onChange={handleShowPassword}
        value={toggle}
      />
    </div>
  );
};
