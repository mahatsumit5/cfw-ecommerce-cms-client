import React, { useEffect, useState } from "react";
import { AdminLayout } from "../../components/layout/AdminLayout";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SingUpForm } from "../../components/admin-signup/SingUpForm";
import { SignInFormComponent } from "../../components/signInForm/signInForm";
import { CustomeTable } from "../../components/table/CustomeTable";
import { getAllAdmins } from "../../axiosHelper/userAxios";
import { useDispatch } from "react-redux";
import { setDisplayTable } from "../../redux/displaySlice";

export const Admin = () => {
  // const [admins, setAdmins] = useState([]);
  const dispatch = useDispatch();
  const getAdmins = async () => {
    const { admins } = await getAllAdmins();
    // setAdmins(admins);
    dispatch(setDisplayTable(admins));
  };
  useEffect(() => {
    getAdmins();
  }, []);
  const column = [
    { heading: "Email", value: "email" },
    { heading: "LName", value: "lName" },
    { heading: "Name", value: "fName" },
    { heading: "Phone", value: "phone" },
    { heading: "Address", value: "address" },
  ];
  return (
    <AdminLayout title={"Admin"} children={<SignInFormComponent />}>
      <Link to="/new-user" className="d-grid nav-link">
        <Button variant="info">New Admin </Button>
      </Link>
      <div className="mt-2">
        <CustomeTable column={column} />
      </div>
    </AdminLayout>
  );
};
