import { AdminLayout } from "../../components/layout/AdminLayout";
import { Container } from "react-bootstrap";
import { NewCategoryForm } from "../../components/category/NewCategoryForm";
import { CategoryTable } from "../../components/category/CategoryTable";
export const Catalogue = () => {
  return (
    <AdminLayout title="Catalogue">
      <Container className="p-5 w-75 d-flex justify-content-center">
        {/* <Form.FloatingLabel
          label="Search"
          className="w-100"
          controlId="floatingInput"
        >
          <Form.Control type="text" />{" "}
        </Form.FloatingLabel> */}
      </Container>
      <NewCategoryForm />

      <div className=" d-flex justify-content-between mt-1 w-100 flex-column gap-3">
        <CategoryTable />
      </div>
    </AdminLayout>
  );
};
