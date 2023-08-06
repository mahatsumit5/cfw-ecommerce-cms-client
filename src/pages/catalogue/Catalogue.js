import { AdminLayout } from "../../components/layout/AdminLayout";
import { Button, Container } from "react-bootstrap";
import { CategoryTable } from "../../components/category/CategoryTable";
import { setModalShow } from "../../systemSlice";
import { useDispatch } from "react-redux";
import { NewCategoryForm } from "../../components/category/NewCategoryForm";
import { CustomModal } from "../../components/customModal/customModal";
import { useState } from "react";
export const Catalogue = () => {
  const [addDisplay, setaddDisplay] = useState(false);
  const [editDisplay, setEditDisplay] = useState(false);

  const dispatch = useDispatch();
  const handleOnClick = () => {
    setaddDisplay(true);
    setEditDisplay(false);
    dispatch(setModalShow(true));
  };
  return (
    <AdminLayout title="Catalogue">
      <CustomModal title={"add new catalogue"}>
        {addDisplay ? <NewCategoryForm /> : <></>}
      </CustomModal>

      <div className="w-100 mt-5 p-3 d-flex rounded justify-content-between shadow ">
        <h3>List of Catalogue </h3>
        <Button variant="dark" onClick={handleOnClick}>
          Add new catalogue
        </Button>
      </div>

      <div className=" d-flex justify-content-between  shadow rounded p-3 mt-3 w-100 flex-column">
        <CategoryTable
          editDisplay={editDisplay}
          setEditDisplay={setEditDisplay}
        />
      </div>
    </AdminLayout>
  );
};
