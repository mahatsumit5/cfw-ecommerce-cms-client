import React, { useRef } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { postCatalogueAction } from "../../Action/catelogueAction";

export const NewCategoryForm = () => {
  const dispatch = useDispatch();
  const nameRef = useRef();
  const handleOnADDCat = (e) => {
    e.preventDefault();
    const { value } = nameRef.current;
    value && dispatch(postCatalogueAction({ title: value }));
  };
  return (
    <div className="d-flex justify-content-center w-100">
      <Form
        className="border p-4 rounded shadow-lg w-80"
        onSubmit={handleOnADDCat}
      >
        <Row>
          <Col>
            <Form.Control type="text" placeholder="Title" ref={nameRef} />
          </Col>
          <Col className="d-grid">
            <Button variant="dark" type="submit">
              Add
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
