import { AdminLayout } from "../../components/layout/AdminLayout";
import { Link } from "react-router-dom";

import EditProductForm from "../../components/products/EditProductForm";
import { NewCategoryForm } from "../../components/category/NewCategoryForm";
export const EditProducts = () => {
  return (
    <AdminLayout title="Products">
      <Link to="/products" className="nav-link">
        <p>Go Back</p>
      </Link>
      <div className="d-flex justify-content-center">
        <EditProductForm />
        <NewCategoryForm />
      </div>
    </AdminLayout>
  );
};
