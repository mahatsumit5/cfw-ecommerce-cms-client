import React, { useEffect, useState } from "react";
import { Button, Form, Table, ToggleButton } from "react-bootstrap";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCatagoryAction,
  getCataloguesAction,
  updateCatagoryAction,
} from "../../Action/catelogueAction";
import { UpdateCatagoryForm } from "./UpdateCategory";
import { setModalShow } from "../../systemSlice";

export const CategoryTable = ({ editDisplay, setEditDisplay }) => {
  const { catagories } = useSelector((store) => store.catagoryInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    !catagories.length && dispatch(getCataloguesAction());
  }, [dispatch, catagories]);
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
    setEditDisplay(true);
  };

  return (
    <>
      {editDisplay ? (
        <UpdateCatagoryForm selectedCategory={selectedCat} />
      ) : (
        <></>
      )}
      <Table hover w-100 responsive="lg" className="" variant="light">
        <thead className="light-text">
          <tr className="font-monospace text-body-secondary ">
            <th className="text-body-secondary ">STATUS</th>
            <th className="text-body-secondary">TITLE</th>
            <th className="text-body-secondary">SLUG</th>
            <th className="text-body-secondary ">ACTION</th>
          </tr>
        </thead>
        <tbody className="mt-2">
          {catagories &&
            catagories?.map(({ _id, status, title, slug }, index) => (
              <tr key={_id} className="mt-2">
                <td className=" d-flex  " style={{ width: "" }}>
                  <span
                    className={
                      status === "active"
                        ? " p-2 rounded  "
                        : " text-body-secondary p-2 rounded "
                    }
                    style={{ width: "100px" }}
                  >
                    {status}
                  </span>
                  <span className=" p-2">
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
                <td className="d-flex gap-1 ">
                  <Button variant="danger" onClick={() => handleOnDelete(_id)}>
                    <AiFillDelete />
                  </Button>
                  <Button variant="primary">
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
