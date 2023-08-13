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
      <Table striped responsive="lg" className="w-100" variant="light">
        <thead className="light-text" key={column}>
          <tr>
            {column.map((item, index) => (
              <TableHeadItem item={item} index={index} key={index} />
            ))}
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody className="mt-2">
          {displayTable.map((item, i) => (
            <TableRow
              key={i}
              i={i}
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
const TableHeadItem = ({ item, index }) => <th key={index}>{item.heading}</th>;
const TableRow = ({
  i,
  item,
  column,
  handleToggleChange,
  handleOndelete,
  handleOnEdit,
}) => (
  <tr className="" key={item?._id}>
    {column.map((colItem, i) => {
      return (
        <>
          <td className="" key={i}>
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
              <>{item[`${colItem.value}`]}</>
            )}
          </td>
        </>
      );
    })}
    <td className="d-flex gap-1 w-100" style={{ height: "100%" }}>
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
