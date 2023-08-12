import React from "react";
import { Button, Form, Table } from "react-bootstrap";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useSelector } from "react-redux";

export const CustomeTable = ({
  column,
  handleToggleChange,
  handleOnDelete,
  handleOnEdit,
}) => {
  const { displayTable } = useSelector((store) => store.displayTableData);
  return (
    <>
      <Table w-100 responsive="lg" className="" variant="light">
        <thead className="light-text">
          <tr>
            <th>No</th>

            {column.map((item, index) => (
              <TableHeadItem item={item} key={index} />
            ))}
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody className="mt-2">
          {/* {displayTable.map((item) => (
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
                    onChange={props.handleToggleChange}
                    checked={item.status === "active" ? true : false}
                  />
                </span>
              </td>
              <td>{item.title}</td>
              {props.name === "slug" ? (
                <td>{item.slug}</td>
              ) : (
                <td>{item.description}</td>
              )}
              <td className="d-flex gap-1 ">
                <Button variant="danger">
                  <AiFillDelete />
                </Button>
                {props.name === "slug" && (
                  <Button variant="primary">
                    <AiFillEdit onClick={() => props.handleOnEdit(item)} />
                  </Button>
                )}
              </td>
            </tr>
          ))} */}
          {displayTable.map((item, i) => (
            <TableRow
              key={i}
              item={item}
              column={column}
              handleToggleChange={handleToggleChange}
              handleOnEdit={handleOnEdit}
              handleOndelete={handleOnDelete}
            />
          ))}
        </tbody>
      </Table>
    </>
  );
};
const TableHeadItem = ({ item }) => <th>{item.heading}</th>;
const TableRow = ({
  item,
  column,
  handleToggleChange,
  handleOndelete,
  handleOnEdit,
  key,
}) => (
  <tr key={key} className="">
    <td>#</td>
    {column.map((colItem, i) => {
      return (
        <>
          <td className="">
            {colItem.value === "status" ? (
              <span className="d-flex">
                <Form.Check
                  type="switch"
                  title="status"
                  value={item._id}
                  onChange={handleToggleChange}
                  checked={item.status === "active" ? true : false}
                />
              </span>
            ) : (
              <></>
            )}
            {colItem.value === "thumbnail" ? (
              <>
                <img
                  src={
                    process.env.REACT_APP_ROOTSERVER + item.thumbnail?.slice(6)
                  }
                  alt="img"
                  width="150px"
                />
              </>
            ) : (
              <> {item[`${colItem.value}`]} </>
            )}
          </td>
        </>
      );
    })}
    <td className="d-flex gap-1 ">
      <Button variant="danger" onClick={() => handleOndelete(item._id)}>
        <AiFillDelete />
      </Button>
      {handleOnEdit && (
        <Button variant="primary" onClick={() => handleOnEdit(item._id)}>
          <AiFillEdit />
        </Button>
      )}
    </td>
  </tr>
);
