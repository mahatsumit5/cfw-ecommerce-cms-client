import { AdminLayout } from "../../components/layout/AdminLayout";
import { Button } from "react-bootstrap";
import { setModalShow } from "../../systemSlice";
import { useDispatch, useSelector } from "react-redux";
import { NewCategoryForm } from "../../components/category/NewCategoryForm";
import { CustomModal } from "../../components/customModal/customModal";
import { useEffect, useState } from "react";
import {
  deleteCatagoryAction,
  getCataloguesAction,
  updateCatagoryAction,
} from "../../Action/catelogueAction";
import { setDisplayTable } from "../../redux/displaySlice";
import { CustomeTable } from "../../components/table/CustomeTable";
import { UpdateCatagoryForm } from "../../components/category/UpdateCategory";
export const Catalogue = () => {
  const [addDisplay, setaddDisplay] = useState(false);
  const [editDisplay, setEditDisplay] = useState(false);
  const { catalogue } = useSelector((store) => store.catagoryInfo);

  const dispatch = useDispatch();
  useEffect(() => {
    !catalogue.length && dispatch(getCataloguesAction());
    dispatch(setDisplayTable(catalogue));
  }, [dispatch, catalogue]);

  const [selectedCat, setSelectedCat] = useState({});

  const handleOnDelete = (_id) => {
    window.alert("Are you sure want to delete?");
    dispatch(deleteCatagoryAction({ _id }));
  };
  const handleToggleChange = (e) => {
    const { value, checked } = e.target;
    dispatch(
      updateCatagoryAction({ value, status: checked ? "active" : "inactive" })
    );
  };

  const handleOnEdit = (item) => {
    setSelectedCat(item);
    dispatch(setModalShow(true));
    setEditDisplay(true);
  };
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
        {editDisplay && <UpdateCatagoryForm selectedCategory={selectedCat} />}
        <CustomeTable
          handleOndelete={handleOnDelete}
          handleToggleChange={handleToggleChange}
          handleOnEdit={handleOnEdit}
          name="slug"
        />
      </div>
    </AdminLayout>
  );
};
