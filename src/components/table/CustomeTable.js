import React from "react";
import { Table } from "react-bootstrap";

export const CustomeTable = ({ status, title, slug }) => {
  return (
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Id</th>
            <th>Status</th>
            <th>Title</th>
            <th>slug</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>{status}</td>
            <td>{title}</td>
            <td>{slug}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
