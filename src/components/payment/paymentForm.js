import React, { useRef, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { postPaymentOptions } from "../../Action/paymentAction";
import { setModalShow } from "../../systemSlice";

const initialState = {
  title: "",
  description: "",
};
export const PaymentForm = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialState);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleOnAdd = (e) => {
    e.preventDefault();
    console.log(form);
    dispatch(postPaymentOptions(form));
    dispatch(setModalShow(false));
  };

  return (
    <div className="d-flex justify-content-center w-100">
      <Form
        className="border p-4 rounded shadow-lg w-75"
        onSubmit={handleOnAdd}
      >
        <div className="gap-2 d-flex flex-column">
          <Col>
            <Form.Control
              type="text"
              placeholder="Title"
              name="title"
              onChange={handleOnChange}
              value={form.title}
            />
          </Col>
          <Col>
            <Form.Control
              rows={5}
              as="textarea"
              name="description"
              placeholder="Description"
              onChange={handleOnChange}
              value={form.description}
            />
          </Col>
          <Col className="d-grid">
            <Button variant="dark" type="submit">
              Add
            </Button>
          </Col>
        </div>
      </Form>
    </div>
  );
};
