import { AdminLayout } from "../../components/layout/AdminLayout";
import { Button, Container } from "react-bootstrap";
import { CategoryTable } from "../../components/category/CategoryTable";
import { setModalShow } from "../../systemSlice";
import { useDispatch } from "react-redux";
import { NewCategoryForm } from "../../components/category/NewCategoryForm";
export const Catalogue = () => {
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(setModalShow(true));
  };
  return (
    <AdminLayout title="Catalogue">
      <NewCategoryForm />

      <Container className="w-100 d-flex justify-content-between border gap-5">
        <h3>List of Catalogue </h3>
        <Button variant="dark" onClick={handleOnClick}>
          Add new catalogue{" "}
        </Button>
      </Container>

      <div className=" d-flex justify-content-between mt-5 w-100 flex-column gap-3">
        <CategoryTable />
      </div>
    </AdminLayout>
  );
};
