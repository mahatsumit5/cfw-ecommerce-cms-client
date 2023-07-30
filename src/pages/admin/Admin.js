import React from "react";
import { AdminLayout } from "../../components/layout/AdminLayout";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SingUpForm } from "../../components/admin-signup/SingUpForm";
import { SignInFormComponent } from "../../components/signInForm/signInForm";

export const Admin = () => {
  return (
    <AdminLayout children={<SignInFormComponent />}>
      <Link to="/new-user" className="d-grid nav-link">
        <Button variant="info">New Admin </Button>
      </Link>
    </AdminLayout>
  );
};
