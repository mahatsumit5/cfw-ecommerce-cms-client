import React, { useState } from "react";
import { AdminLayout } from "../../components/layout/AdminLayout";
import { CustomeInput } from "../../components/customeInput/CustomeInput";
import { Button, Container, Form, Table, ToggleButton } from "react-bootstrap";

import { FcSearch } from "react-icons/fc";
import { NewCategoryForm } from "../../components/category/NewCategoryForm";
import { CategoryTable } from "../../components/category/CategoryTable";
export const Catalogue = () => {
  const [form, setForm] = useState({});

  return (
    <AdminLayout title="Catalogue">
      <Container className="mt-3 p-3 w-75 d-flex justify-content-center">
        <Form.FloatingLabel
          label="Search"
          className="w-100"
          controlId="floatingInput"
        >
          <Form.Control type="text" />{" "}
        </Form.FloatingLabel>
      </Container>
      <NewCategoryForm />

      <div className=" d-flex  p-2 justify-content-between mt-1 w-100 flex-column gap-3">
        <CategoryTable />
      </div>
    </AdminLayout>
  );
};
