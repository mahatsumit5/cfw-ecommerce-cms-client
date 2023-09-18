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
    dispatch(deleteCatagoryAction({ _id }));
  };
  const handleToggleChange = (e) => {
    const { value, checked } = e.target;
    dispatch(
      updateCatagoryAction({ value, status: checked ? "active" : "inactive" })
    );
  };

  const handleOnEdit = (id) => {
    setSelectedCat(id);
    dispatch(setModalShow(true));
    setEditDisplay(true);
  };
  const handleOnClick = () => {
    setaddDisplay(true);
    setEditDisplay(false);
    dispatch(setModalShow(true));
  };

  const column = [
    // { heading: "ID", value: "_id" },
    { heading: "STATUS", value: "status" },
    { heading: "TITLE", value: "title" },
    { heading: "slug", value: "slug" },
  ];
  return (
    <AdminLayout title="Catalogue">
      <CustomModal title={"add new catalogue"}>
        {addDisplay ? <NewCategoryForm /> : <></>}
      </CustomModal>

      <div className="w-100 mt-2 p-3 d-flex rounded justify-content-between shadow ">
        <span>
          <h3> Catalogue </h3>
          <p>{catalogue?.length} catalogue found</p>
        </span>
        <div>
          <Button variant="primary" onClick={handleOnClick}>
            Add new catalogue
          </Button>
        </div>
      </div>

      <div className="shadow   mt-3 ">
        {editDisplay && <UpdateCatagoryForm _id={selectedCat} />}
        <CustomeTable
          handleOnDelete={handleOnDelete}
          handleToggleChange={handleToggleChange}
          handleOnEdit={handleOnEdit}
          column={column}
        />
      </div>
    </AdminLayout>
  );
};
