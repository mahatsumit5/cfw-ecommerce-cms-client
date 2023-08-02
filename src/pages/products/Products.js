import React from "react";
import { AdminLayout } from "../../components/layout/AdminLayout";
import { Button, Container, Dropdown, Form, Row } from "react-bootstrap";

export const Products = () => {
  return (
    <AdminLayout title="Products">
      <div className="w-100 mt-2 p-3  rounded  shadow ">
        <div className=" d-flex justify-content-between">
          <h3 className="font-monospace">List of Products </h3>
          <Button variant="primary">Add new catalogue </Button>
        </div>
        <div className="mt-2 text-body-secondary d-flex gap-5">
          <a>Pants</a>
          <a>Shirt</a>
          <a>Shoes</a>
          <a>Jackets</a>
          <a>Women</a>
        </div>
        <hr></hr>
        <div className="mt-2 text-body-secondary d-flex gap-5 justify-content-between">
          <div>
            <Form.Control placeholder="Search a product" />
          </div>
          <div className="d-flex gap-2 ">
            <Dropdown variant="primary">
              <Dropdown.Toggle id="" variant="primary">
                Sort by
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1" active>
                  Action
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown variant="primary">
              <Dropdown.Toggle id="" variant="primary">
                Filter by
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1" active>
                  Action
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <hr></hr>
      </div>
    </AdminLayout>
  );
};
