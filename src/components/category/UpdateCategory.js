import React, { useEffect, useRef, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateCatagoryAction } from "../../Action/catelogueAction";
import { CustomModal } from "../customModal/customModal";
import { setModalShow } from "../../systemSlice";

export const UpdateCatagoryForm = ({ selectedCategory }) => {
  const initialState = {
    title: "title",
    status: "active",
  };
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialState);

  useEffect(() => {
    selectedCategory && setForm(selectedCategory);
  }, [dispatch, selectedCategory]);

  const handleOnUpdate = (e) => {
    e.preventDefault();
    const obj = {
      value: form._id,
      title: form.title,
    };
    dispatch(updateCatagoryAction(obj));
    dispatch(setModalShow(false));
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <CustomModal title={"Update Catalogue "}>
      <div className="d-flex justify-content-center w-100">
        <Form
          className="border p-4 rounded shadow-lg w-80"
          onSubmit={handleOnUpdate}
        >
          <Row>
            <Col>
              <Form.Control
                type="text"
                name="title"
                value={form.title}
                onChange={handleOnChange}
              />
            </Col>
            <Col className="d-grid">
              <Button variant="dark" type="submit">
                Edit
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </CustomModal>
  );
};
