import React, { useState } from "react";
import { AdminLayout } from "../../components/layout/AdminLayout";
import { Button, ButtonGroup, Form } from "react-bootstrap";
import { CustomeInput } from "../../components/customeInput/CustomeInput";
import { postProductAction } from "../../Action/productAction";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { SelectedCategory } from "../../components/category/SelecteCategory";
import NewProductForm from "../../components/products/NewProductForm";
import { NewCategoryForm } from "../../components/category/NewCategoryForm";
import { CustomModal } from "../../components/customModal/customModal";

export const NewProduct = () => {
  return (
    <AdminLayout>
      <Link to="/products" className="nav-link">
        <p>Go Back</p>
      </Link>
      <div className="d-flex justify-content-center">
        <NewProductForm />
      </div>

      <NewCategoryForm />
    </AdminLayout>
  );
};
