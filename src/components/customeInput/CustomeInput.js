import React from "react";
import { Form, FloatingLabel } from "react-bootstrap";
export const CustomeInput = ({ label, ...rest }) => {
  return (
    <Form.Group className="mb-3">
      <FloatingLabel label={label}>
        {" "}
        <Form.Control {...rest} />
      </FloatingLabel>
    </Form.Group>
  );
};
