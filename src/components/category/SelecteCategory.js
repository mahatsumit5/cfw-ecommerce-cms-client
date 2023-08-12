import React from "react";
import { Form } from "react-bootstrap";
import { useSelector } from "react-redux";

export const SelectedCategory = (props) => {
  const { catalogue } = useSelector((store) => store.catagoryInfo);

  return (
    <>
      <Form.Group>
        <Form.Select {...props}>
          <option value="">...Select...</option>

          {catalogue.map(({ _id, title }) => (
            <option key={_id} value={_id} selected={_id === props._id}>
              {title}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
    </>
  );
};
