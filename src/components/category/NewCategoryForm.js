import React, { useRef, useState } from "react";
import { Button, Col, Form, FormControl, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { postCatalogueAction } from "../../Action/catelogueAction";
import { CustomModal } from "../customModal/customModal";

export const NewCategoryForm = () => {
  const [img, setImg] = useState({});
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const handleOnADDCat = (e) => {
    e.preventDefault();
    const formDt = new FormData();
    formDt.append("image", img);
    formDt.append("title", title);
    dispatch(postCatalogueAction(formDt));
  };
  const handleOnselectImg = (e) => {
    const { files } = e.target;
    setImg(files[0]);
  };

  return (
    // <CustomModal title={"Add New Catalogue"}>
    <div className="d-flex justify-content-center w-100">
      <Form
        className="border p-4 rounded shadow-lg w-75"
        onSubmit={handleOnADDCat}
      >
        <Row>
          <Col>
            <Form.Control
              type="text"
              placeholder="Title"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </Col>
          <Col>
            <FormControl
              className="mt-2"
              type="file"
              name="profile"
              onChange={handleOnselectImg}
            />
          </Col>
        </Row>
        <Row>
          <Col className="d-grid">
            <Button variant="dark" type="submit">
              Add
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
    // </CustomModal>
  );
};
