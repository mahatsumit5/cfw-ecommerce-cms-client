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
        <thead className="" key={column}>
          <tr>
            {column?.map((item, index) => (
              <TableHeadItem item={item} index={index} key={index} />
            ))}
            {(handleOnEdit || handleOnDelete) && (
              <th className="text-secondary">ACTION</th>
            )}
          </tr>
        </thead>
        <tbody className="mt-2">
          {displayTable.map((item, i) => (
            <TableRow
              key={i}
              index={i}
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
const TableHeadItem = ({ item, index }) => (
  <th className="text-secondary" key={index}>
    {item.heading}
  </th>
);
const TableRow = ({
  index,
  item,
  column,
  handleToggleChange,
  handleOndelete,
  handleOnEdit,
}) => (
  <tr key={index}>
    {column.map((colItem, index) => {
      return (
        <>
          <td className="" key={index}>
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
            {colItem.value === "thumbnail" || colItem.value === "image" ? (
              <>
                <img
                  src={item.thumbnail || item.image}
                  alt="img"
                  width="80px"
                />
              </>
            ) : (
              <>{item[`${colItem.value}`]}</>
            )}
          </td>
        </>
      );
    })}
    {(handleOnEdit || handleOndelete) && (
      <div>
        <td className="d-flex gap-1 w-100">
          {handleOndelete && (
            <Button variant="danger" onClick={() => handleOndelete(item._id)}>
              <AiFillDelete />
            </Button>
          )}
          {handleOnEdit && (
            <Button variant="primary" onClick={() => handleOnEdit(item._id)}>
              <AiFillEdit />
            </Button>
          )}
        </td>
      </div>
    )}
  </tr>
);
