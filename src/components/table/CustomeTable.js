import React from "react";
import { Button, Form, Table } from "react-bootstrap";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useSelector } from "react-redux";

export const CustomeTable = ({ handleOndelete, ...rest }) => {
  const { displayTable } = useSelector((store) => store.displayTableData);
  return (
    <>
      <Table w-100 responsive="lg" className="" variant="light">
        <thead className="light-text">
          <tr className="font-monospace text-body-secondary ">
            <th className="text-body-secondary ">STATUS</th>
            <th className="text-body-secondary">TITLE</th>
            <th className="text-body-secondary">{rest.name.toUpperCase()}</th>
            <th className="text-body-secondary ">ACTION</th>
          </tr>
        </thead>
        <tbody className="mt-2">
          {displayTable.map((item) => (
            <tr key={item._id} className="mt-2">
              <td className=" d-flex  " style={{ width: "" }}>
                <span
                  className={
                    item.status === "active"
                      ? " p-2 rounded  "
                      : " text-body-secondary p-2 rounded "
                  }
                  style={{ width: "100px" }}
                >
                  {item.status}
                </span>
                <span className="p-2">
                  <Form.Check
                    type="switch"
                    title="status"
                    value={item._id}
                    onChange={rest.handleToggleChange}
                    checked={item.status === "active" ? true : false}
                  />
                </span>
              </td>
              <td>{item.title}</td>
              {rest.name === "slug" ? (
                <td>{item.slug}</td>
              ) : (
                <td>{item.description}</td>
              )}
              <td className="d-flex gap-1 ">
                <Button
                  variant="danger"
                  onClick={() => handleOndelete(item._id)}
                >
                  <AiFillDelete />
                </Button>
                {rest.name === "slug" && (
                  <Button variant="primary">
                    <AiFillEdit onClick={() => rest.handleOnEdit(item)} />
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};
