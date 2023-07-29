import React, { useState } from "react";
import { Button, Form, Table, ToggleButton } from "react-bootstrap";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCatagoryAction,
  updateCatagoryAction,
} from "../../Action/catelogueAction";
import { UpdateCatagoryForm } from "./UpdateCategory";
import { setModalShow } from "../../systemSlice";

export const CategoryTable = () => {
  const { catagories } = useSelector((store) => store.catagoryInfo);
  const dispatch = useDispatch();
  const [selectedCat, setSelectedCat] = useState({});

  const handleOnDelete = (_id) => {
    window.alert("Are you sure want to delete?");
    dispatch(deleteCatagoryAction({ _id }));
  };
  const handleToggleChange = (e) => {
    const { value, checked } = e.target;
    dispatch(
      updateCatagoryAction({ value, status: checked ? "active" : "inactive" })
    );
  };

  const handleOnEdit = (item) => {
    setSelectedCat(item);
    dispatch(setModalShow(true));
  };

  return (
    <>
      <UpdateCatagoryForm selectedCategory={selectedCat} />
      <Table responsive striped bordered hover variant="" className="">
        <thead>
          <tr>
            <th>Id</th>
            <th>Status</th>
            <th>Title</th>
            <th>slug</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {!!catagories &&
            catagories?.map(({ _id, status, title, slug }, index) => (
              <tr key={_id}>
                <td>{index + 1}</td>
                <td className="d-flex gap-3">
                  <span
                    className={
                      status === "active"
                        ? " p-2 rounded"
                        : " text-body-secondary p-2 rounded"
                    }
                  >
                    {" "}
                    {status}
                  </span>
                  <span className=" p-2">
                    {" "}
                    <Form.Check
                      type="switch"
                      title="status"
                      value={_id}
                      onChange={handleToggleChange}
                    />
                  </span>
                </td>
                <td>{title}</td>
                <td>{slug}</td>
                <td className="d-flex gap-2 ">
                  <Button variant="danger" onClick={() => handleOnDelete(_id)}>
                    <AiFillDelete />
                  </Button>
                  <Button variant="warning">
                    <AiFillEdit
                      onClick={() => handleOnEdit({ _id, status, title, slug })}
                    />
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
};
