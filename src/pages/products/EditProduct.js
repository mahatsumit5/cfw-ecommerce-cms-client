import { AdminLayout } from "../../components/layout/AdminLayout";
import { Button, Form } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { SelectedCategory } from "../../components/category/SelecteCategory";
import { CustomeInput } from "../../components/customeInput/CustomeInput";
import { useDispatch } from "react-redux";
import { getProducts } from "../../axiosHelper/productAxios";
import { updateProductAction } from "../../Action/productAction";
export const EditProducts = () => {
  const { _id } = useParams();
  const dispatch = useDispatch();
  const [form, setForm] = useState({});
  const [img, setImg] = useState([]);
  const [selectedImg, setSelectedImg] = useState([]);
  useEffect(() => {
    getSelectedproduct();
  }, []);

  const getSelectedproduct = async () => {
    const { result } = await getProducts(_id);
    result?._id && setForm(result);
  };
  const inputs = [
    {
      name: "name",
      label: "Name",
      type: "text",
      placeholder: "Denim Pants",
      required: true,
      value: form.title,
    },
    {
      name: "color",
      label: "color",
      type: "color",
      value: form.color,
    },
    {
      name: "slug",
      label: "Slug",
      type: "text",
      value: form.slug,
      disabled: true,
    },
    {
      name: "sku",
      label: "SKU",
      type: "text",
      placeholder: "DENIM-TV-30",
      required: true,
      value: form.sku,
      disabled: true,
    },
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
    {
      name: "description",
      label: "Description",
      type: "text",
      as: "textarea",
      placeholder: "Product Description",
      required: true,
      value: form.description,
    },
  ];
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
    if (!window.confirm("Are your sure you want to update this product")) {
      return;
    }

    const formDt = new FormData();
    //remove sku,skug,--v,creatdAt,updatedAt

    const { sku, slug, __v, createdAt, updatedAt, ...rest } = form;
    // remove all the images in the which matches url in selectedImages
    rest.images = rest.images.filter((url) => !selectedImg.includes(url));
    for (let key in rest) {
      formDt.append(key, rest[key]);
    }
    //check if there is any image
    if (img.length) {
      [...img].forEach((image) => {
        formDt.append("images", image);
      });
    }

    //append all the form data and the image together
    const isPosted = await dispatch(updateProductAction(formDt));
    isPosted && getSelectedproduct();
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
    <AdminLayout title="Products">
      <Link to="/products" className="nav-link">
        <p>Go Back</p>
      </Link>
      <div className="p-3">
        <Form
          action="/"
          method="post"
          encType="multipart/form-data"
          onSubmit={handleOnSubmit}
        >
          <Form.Group className="mb-3 ">
            <Form.Check
              name="status"
              type="switch"
              label={form.status}
              onChange={handleOnChange}
              checked={form.status === "active"}
            ></Form.Check>
          </Form.Group>
          <SelectedCategory
            onChange={handleOnChange}
            name="parentCat"
            required={true}
            _id={form.parentCat}
          />

          {inputs.map((item, index) => (
            <CustomeInput key={index} {...item} onChange={handleOnChange} />
          ))}
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
          {selectedImg.length && (
            <div className="d-grid newProduct mt-5">
              <Button variant="danger" type="submit">
                Delete
              </Button>
            </div>
          )}
        </Form>
      </div>
    </AdminLayout>
  );
};
