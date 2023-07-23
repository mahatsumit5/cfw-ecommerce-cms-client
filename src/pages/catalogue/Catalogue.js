import React, { useState } from "react";
import { AdminLayout } from "../../components/layout/AdminLayout";
import { CustomeInput } from "../../components/customeInput/CustomeInput";
import { Button, Form, Table, ToggleButton } from "react-bootstrap";
import {
  deleteCatagoryAction,
  postCatalogueAction,
  updateCatagoryAction,
} from "../../Action/catelogueAction";
import { useDispatch, useSelector } from "react-redux";
import { AiFillDelete } from "react-icons/ai";
export const Catalogue = () => {
  const [form, setForm] = useState({});
  const dispatch = useDispatch();
  const { catagories } = useSelector((store) => store.catagoryInfo);
  const input = {
    placeholder: "",
    required: true,
    variant: "outlined",
    size: "small",
    type: "text",
    label: "Title",
  };
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      title: value,
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    // console.log(form);
    dispatch(postCatalogueAction(form));
  };
  const handleOnDelete = (_id) => {
    dispatch(deleteCatagoryAction({ _id }));
  };
  const handleToggleChange = (e) => {
    const { value, checked } = e.target;
    dispatch(
      updateCatagoryAction({ value, status: checked ? "active" : "inactive" })
    );
  };
  return (
    <AdminLayout title="Catalogue">
      <div className="d-flex mt-5  justify-content-center">
        <Form onSubmit={handleOnSubmit} className="d-flex gap-5">
          <CustomeInput {...input} onChange={handleOnChange} />

          <div className="">
            <Button type="submit" variant="success">
              Add
            </Button>
          </div>
        </Form>
      </div>
      <div>
        <Table striped bordered hover variant="">
          <thead>
            <tr>
              <th>Id</th>
              <th>Status</th>
              <th>Title</th>
              <th>slug</th>
              <th>Action</th>
            </tr>
          </thead>
          {catagories?.map(({ _id, status, title, slug }, index) => (
            <tbody>
              <tr>
                <td>{index + 1}</td>
                <td>
                  {status}
                  <Form.Check
                    type="switch"
                    title="status"
                    value={_id}
                    onChange={handleToggleChange}
                  />
                </td>
                <td>{title}</td>
                <td>{slug}</td>
                <td>
                  <Button variant="danger" onClick={() => handleOnDelete(_id)}>
                    <AiFillDelete />
                  </Button>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    </AdminLayout>
  );
};
