import React, { useState } from "react";
import { AdminLayout } from "../layout/AdminLayout";
import { Button, ButtonGroup, Form } from "react-bootstrap";
import { CustomeInput } from "../customeInput/CustomeInput";
import { postProductAction } from "../../Action/productAction";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { SelectedCategory } from "../category/SelecteCategory";
const initialState = {
  status: "inactive",
};
export const NewProduct = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialState);
  const [img, setImg] = useState([]);
  console.log(img);
  const inputs = [
    {
      name: "name",
      label: "Name",
      type: "text",
      placeholder: "Denim Pants",
      required: true,
    },
    {
      name: "sku",
      label: "SKU",
      type: "text",
      placeholder: "DENIM-TV-30",
      required: true,
    },
    {
      name: "qty",
      label: "QUANTITY",
      type: "number",
      placeholder: "50",
      required: true,
    },
    {
      name: "price",
      label: "Price",
      type: "number",
      placeholder: "$ 3000",
      required: true,
    },
    {
      name: "salesPrice",
      label: "Sales Price",
      type: "number",
      placeholder: "$ 3000",
    },
    {
      name: "salesStartDate",
      label: "Sales Start Date",
      type: "Date",
    },
    {
      name: "salesEndDate",
      label: "Sales End Date",
      type: "Date",
    },
    {
      name: "description",
      label: "Description",
      type: "text",
      as: "textarea",
      placeholder: "Product Description",
      required: true,
    },
  ];
  const handleOnChange = (e) => {
    let { checked, name, value } = e.target;
    if (name === "status") {
      value = checked ? "active" : "inactive";
    }
    setForm({ ...form, [name]: value });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    //set all data in form Data
    const formDt = new FormData();
    for (const key in form) {
      formDt.append(key, form[key]);
    }
    //check if there is any image
    if (img.length) {
      [...img].forEach((image) => {
        formDt.append("images", image);
      });
    }
    //append all the form data and the image together

    const isPosted = await dispatch(postProductAction(formDt));
    // isPosted && navigate("/products");
  };
  const handleOnImageAttach = (e) => {
    const { files } = e.target;
    setImg(files);
  };
  return (
    <AdminLayout>
      <Link to="/products" className="nav-link">
        <p>Go Back</p>
      </Link>
      <div>
        <Form
          action="/"
          method="post"
          encType="multipart/form-data"
          onSubmit={handleOnSubmit}
        >
          <Form.Group className="mb-3">
            <Form.Check
              name="status"
              type="switch"
              label="Status"
              onChange={handleOnChange}
            ></Form.Check>
          </Form.Group>
          <SelectedCategory
            onChange={handleOnChange}
            name="parentCat"
            required
          />

          {inputs.map((item, index) => (
            <CustomeInput key={index} {...item} onChange={handleOnChange} />
          ))}
          <Form.Group className="mb-3">
            <Form.Control
              type="file"
              name="img"
              multiple="multiple"
              onChange={handleOnImageAttach}
              required={true}
            />
          </Form.Group>
          <div className="d-grid newProduct">
            <Button variant="primary" type="submit">
              Submit
            </Button>{" "}
          </div>
        </Form>
      </div>
    </AdminLayout>
  );
};
