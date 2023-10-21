import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Form } from "react-bootstrap";
import { postProductAction } from "../../Action/productAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SelectedCategory } from "../category/SelecteCategory";
import { setModalShow } from "../../systemSlice";

const NewProductForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({ status: "inactive" });
  const [img, setImg] = useState([]);
  const [color, setColor] = useState([]);
  const [tempColor, setTempColor] = useState("#fafafa");
  const [size, setSize] = useState([]);
  //   handle input change
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSizeSelect = (e) => {
    const { name, value, checked } = e.target;
    if (!checked) {
      setSize(size.filter((s) => s !== value));
      return;
    }
    setSize([...size, value]);
  };

  //  function to attach image
  const handleOnImageAttach = (e) => {
    const { files } = e.target;
    setImg(files);
  };

  //   submit order
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

    color.forEach((color) => {
      formDt.append("color", color);
    });
    size.forEach((size) => {
      formDt.append("size", size);
    });
    //append all the form data and the image together

    const isPosted = await dispatch(postProductAction(formDt));
    isPosted && navigate("/products");
  };
  // useEffect(() => {
  //   setForm({ ...form, color: color, size: size });
  // }, [color, size]);

  return (
    <Form
      action="/"
      method="post"
      encType="multipart/form-data"
      onSubmit={handleOnSubmit}
      className="w-100 rounded shadow-lg p-3 mb-3"
    >
      <h1 className="text-center p-3 ">Add new product </h1>
      {/* catagory */}
      <Form.Group className="mb-3 d-flex gap-2 justify-content-between">
        <SelectedCategory onChange={handleOnChange} name="parentCat" required />
        <Button
          className=""
          onClick={() => {
            dispatch(setModalShow(true));
          }}
        >
          Add new Catagory
        </Button>
      </Form.Group>

      {/* color */}
      <Form.Group className="mb-3 d-flex gap-3 justify-content-start">
        <div className="">
          <Form.Label>Color</Form.Label>
          <Form.Control
            type="color"
            name="color"
            defaultValue="#fa23f3"
            onChange={(e) => {
              setTempColor(e.target.value);
            }}
          />
        </div>

        <div className="">
          <p></p>
          <Button
            className="mt-3 "
            variant="dark"
            onClick={() => {
              if (color.includes(tempColor)) {
                return window.alert("Color already added.");
              }
              setColor([...color, tempColor]);
            }}
          >
            Add
          </Button>
        </div>
      </Form.Group>
      <div className="mt-2 d-flex gap-2  flex-wrap mb-2">
        {color.map((c, index) => (
          <div
            key={index}
            className="border rounded-circle "
            style={{
              height: 40,
              width: 40,
              backgroundColor: `${c}`,
            }}
            onClick={() => {
              setColor(color.filter((item) => item !== c));
            }}
          />
        ))}
      </div>
      {/* name and sku */}
      <Form.Group className="mb-3 d-flex gap-3 justify-content-between">
        {[
          {
            name: "title",
            label: "Name ",
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
        ].map(({ name, label, type, placeholder, required }) => (
          <div className="flex-grow-1">
            <Form.Label>{label}</Form.Label>
            <Form.Control
              type={type}
              name={name}
              placeholder={placeholder}
              required={required}
              onChange={handleOnChange}
            />
          </div>
        ))}
      </Form.Group>

      {/* qty and price */}
      <Form.Group className="mb-3 d-flex gap-3 justify-content-between">
        {[
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
        ].map(({ name, label, type, placeholder, required }) => (
          <div className="flex-grow-1">
            <Form.Label>{label}</Form.Label>
            <Form.Control
              type={type}
              name={name}
              placeholder={placeholder}
              required={required}
              onChange={handleOnChange}
            />
          </div>
        ))}
      </Form.Group>

      {/* sales date */}
      <Form.Group className="mb-3 d-flex gap-3 justify-content-between">
        {[
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
        ].map(({ name, label, type, placeholder, required }) => (
          <div className="flex-grow-1">
            <Form.Label>{label}</Form.Label>
            <Form.Control
              type={type}
              name={name}
              placeholder={placeholder}
              required={required}
              onChange={handleOnChange}
            />
          </div>
        ))}
      </Form.Group>

      {/* size and images */}
      <Form.Group className="mb-3 d-flex gap-2">
        <div className="d-flex flex-column flex-grow-1">
          <Form.Label>Select all the available size</Form.Label>
          <div className="d-flex gap-3 flex-wrap">
            {["xs", "sm", "md", "lg", "xl", "xxl"].map((size) => (
              <div key={size}>
                <Form.Check
                  type="checkbox"
                  id={size}
                  name="size"
                  value={size}
                  onChange={handleSizeSelect}
                />
                <Form.Check.Label>{size}</Form.Check.Label>
              </div>
            ))}
          </div>
        </div>
        <div>
          <Form.Control
            type="file"
            name="img"
            multiple="multiple"
            onChange={handleOnImageAttach}
            required={true}
          />
        </div>
      </Form.Group>

      {/* description */}
      <Form.Group className="mb-3 d-flex gap-3 justify-content-between">
        {[
          {
            name: "description",
            label: "Description",
            type: "text",
            as: "textarea",
            placeholder: "Product Description",
            required: true,
          },
        ].map(({ name, label, type, placeholder, required, as }) => (
          <div className="flex-grow-1">
            <Form.Label>{label}</Form.Label>
            <Form.Control
              as={as}
              type={type}
              name={name}
              placeholder={placeholder}
              required={required}
              onChange={handleOnChange}
              style={{ height: "150px" }}
            />
          </div>
        ))}
      </Form.Group>

      {/* buton */}
      <div className="d-grid text-center newProduct">
        <Button variant="primary" type="submit">
          Submit
        </Button>{" "}
      </div>
    </Form>
  );
};

export default NewProductForm;
