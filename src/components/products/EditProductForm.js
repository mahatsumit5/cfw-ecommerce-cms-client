import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../../axiosHelper/productAxios";
import { updateProductAction } from "../../Action/productAction";
import { Button, Form } from "react-bootstrap";
import { SelectedCategory } from "../category/SelecteCategory";
import { useNavigate, useParams } from "react-router-dom";
import { setModalShow } from "../../systemSlice";

const EditProductForm = () => {
  const { _id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({});
  const [img, setImg] = useState([]);
  const [selectedImg, setSelectedImg] = useState([]);
  const [color, setColor] = useState([]);
  const [tempColor, setTempColor] = useState("");
  const [size, setSize] = useState([]);

  useEffect(() => {
    const getSelectedproduct = async () => {
      const { result } = await getProducts(_id);
      result?._id && setForm(result);
      setColor(result.color);
      setSize(result.size);
    };
    getSelectedproduct();
  }, []);

  const handleOnChange = (e) => {
    let { checked, name, value } = e.target;
    if (name === "thumbnail" && selectedImg.includes(value)) {
      return alert("Deleting image can't be set as thumbnail");
    }
    if (name === "status") {
      value = checked ? "active" : "inactive";
    }
    setForm({ ...form, [name]: value });
  };
  const handleOnImageAttach = (e) => {
    const { files } = e.target;
    setImg(files);
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const formDt = new FormData();
    //remove sku,skug,--v,creatdAt,updatedAt

    const { sku, slug, __v, createdAt, updatedAt, color, size, ...rest } = form;
    // remove all the images in the which matches url in selectedImages
    rest.images = rest.images.filter((url) => !selectedImg.includes(url));
    for (let key in rest) {
      formDt.append(key, rest[key]);
    }
    //check if there is any image
    //append all the form data and the image together
    if (img.length) {
      [...img].forEach((image) => {
        formDt.append("images", image);
      });
    }

    // append color as well
    color.forEach((color) => {
      formDt.append("color", color);
    });
    size.forEach((size) => {
      formDt.append("size", size);
    });

    const isSucess = await dispatch(updateProductAction(formDt));
    isSucess && navigate(-1);
  };
  const handleOnSelect = (e) => {
    const { value, checked } = e.target;
    if (value === form.thumbnail) {
      return alert(
        "You can't delete the thumbnail, choose another thumbnail first"
      );
    }
    checked
      ? setSelectedImg([...selectedImg, value])
      : setSelectedImg(selectedImg.filter((url) => url !== value));
  };
  return (
    <Form
      action="/"
      method="post"
      encType="multipart/form-data"
      onSubmit={handleOnSubmit}
      className="w-75 rounded shadow-lg p-3 mb-3"
    >
      <h1 className="text-center p-3 ">Edit product </h1>

      {/* Status and Catagory */}
      <Form.Group className="mb-3 d-flex gap-2 justify-content-between flex-wrap">
        <Form.Check
          name="status"
          type="switch"
          label={form.status}
          onChange={handleOnChange}
          checked={form.status === "active"}
        ></Form.Check>{" "}
        <SelectedCategory
          onChange={handleOnChange}
          name="parentCat"
          required={true}
          _id={form.parentCat}
        />
        <div className="">
          <Button
            onClick={() => {
              dispatch(setModalShow(true));
            }}
          >
            New Catagory
          </Button>
        </div>
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
            label: "Name",
            type: "text",
            placeholder: "Denim Pants",
            required: true,
            value: form.title,
            disabled: false,
          },

          {
            name: "sku",
            label: "SKU",
            type: "text",
            placeholder: "DENIM-TV-30",
            disabled: true,
            required: true,
            value: form.sku,
          },
        ].map(
          ({ name, label, type, placeholder, required, value, disabled }) => (
            <div className="flex-grow-1">
              <Form.Label>{label}</Form.Label>
              <Form.Control
                type={type}
                name={name}
                placeholder={placeholder}
                required={required}
                onChange={handleOnChange}
                value={value}
                disabled={disabled}
              />
            </div>
          )
        )}
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
            value: form.qty,
          },
          {
            name: "price",
            label: "Price",
            type: "number",
            placeholder: "$ 3000",
            required: true,
            value: form.price,
          },
          {
            name: "salesPrice",
            label: "Sales Price",
            type: "number",
            placeholder: "$ 3000",
            value: form.salesPrice,
          },
        ].map(({ name, label, type, placeholder, required, value }) => (
          <div className="flex-grow-1">
            <Form.Label>{label}</Form.Label>
            <Form.Control
              type={type}
              name={name}
              placeholder={placeholder}
              required={required}
              onChange={handleOnChange}
              value={value}
            />
          </div>
        ))}
      </Form.Group>

      {/* sales date */}
      <Form.Group className="mb-3 d-flex gap-3 justify-content-between flex-wrap">
        {[
          {
            name: "salesStartDate",
            label: "Sales Start Date",
            type: "Date",
            value: form.salesStartDate?.slice(0, 10),
          },
          {
            name: "salesEndDate",
            label: "Sales End Date",
            type: "Date",
            value: form.salesEndDate?.slice(0, 10),
          },
        ].map(({ name, label, type, placeholder, required, value }) => (
          <div className="flex-grow-1">
            <Form.Label>{label}</Form.Label>
            <Form.Control
              type={type}
              name={name}
              placeholder={placeholder}
              required={required}
              onChange={handleOnChange}
              value={value}
            />
          </div>
        ))}
      </Form.Group>
      {/* {inputs.map((item, index) => (
      <CustomeInput key={index} {...item} onChange={handleOnChange} />
    ))} */}

      {/* description */}
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
            value: form.description,
          },
        ].map(({ name, label, type, placeholder, required, as, value }) => (
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
              value={value}
            />
          </div>
        ))}
      </Form.Group>

      {/* images */}
      <div className="py-5 d-flex flex-wrap ">
        {form.images?.map((url) => (
          <>
            <div>
              <Form.Check
                value={url}
                type="checkbox"
                checked={selectedImg.includes(url)}
                onChange={handleOnSelect}
              />
              <Form.Check.Label>
                <img
                  className="img-thumbnail"
                  key={url}
                  src={url}
                  alt=""
                  width="150px"
                />
              </Form.Check.Label>
              <Form.Check
                name="thumbnail"
                value={url}
                type="radio"
                checked={url === form.thumbnail}
                onChange={handleOnChange}
              />
            </div>
          </>
        ))}
      </div>
      <Form.Group className="mb-3">
        <Form.Control
          type="file"
          name="img"
          multiple
          onChange={handleOnImageAttach}
        />
      </Form.Group>
      <div className="d-grid newProduct">
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </div>

      {/* submit button */}
      {selectedImg.length && (
        <div className="d-grid newProduct mt-5">
          <Button variant="danger" type="submit">
            Delete
          </Button>
        </div>
      )}
    </Form>
  );
};

export default EditProductForm;
