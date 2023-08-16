import React, { useState } from "react";
import { AdminLayout } from "../../components/layout/AdminLayout";
import "./profile.css";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { EditProfile } from "../../components/profile/EditProfile";
import { ProfileLayout } from "../../components/profile/ProfileLayout";
import { ProfileInfo } from "../../components/profile/ProfileInfo";
export const Profile = () => {
  const { user } = useSelector((store) => store.userInfo);
  const [display, setDisplay] = useState("profile");
  const components = {
    profile: <ProfileInfo />,
    editprofile: <EditProfile />,
  };
  return (
    <AdminLayout title="Profile">
      <Container className=" p-2" style={{ minHeight: "100vh" }}>
        <div className="">
          <div
            className="bg-primary d-flex gap-3 p-5 justify-content-between "
            style={{ position: "relative", height: "150px" }}
          >
            <div className="profile-pic">
              <img
                src={process.env.REACT_APP_ROOTSERVER + user.profile?.slice(6)}
                alt="img"
                style={{ height: "100%", width: "100%", borderRadius: "50%" }}
              />
            </div>

            <div className="text-light  info">
              <p className="fs-2 fw-medium">
                {user.fName.toUpperCase()}-{user.lName.toUpperCase()}
              </p>
              <p className="">
                {user.email} | {user.phone}
              </p>
            </div>
          </div>
        </div>
        <div className=" mt-5  p-3">
          <ul className="d-flex gap-5">
            <li className="mt-2 sidebar-link fw-medium fs-6 text-secondary">
              <Link className="nav-link" onClick={() => setDisplay("profile")}>
                Profile
              </Link>
            </li>

            <li className="mt-2 sidebar-link fw-medium fs-6 text-secondary">
              <Link to="/dashboard" className="nav-link">
                Dashboard{" "}
              </Link>
            </li>
            <li className="mt-2 sidebar-link fw-medium fs-6 text-secondary">
              <Link
                className="nav-link"
                onClick={() => setDisplay("editprofile")}
              >
                Edit Profile{" "}
              </Link>
            </li>

            <li className="mt-2 sidebar-link fw-medium fs-6 text-secondary">
              <Link className="nav-link">Sign Out </Link>
            </li>
          </ul>
        </div>
        <div className="  justify-content-start gap-5 m-auto p-5">
          <ProfileLayout>{components[display]}</ProfileLayout>
        </div>
      </Container>
    </AdminLayout>
  );
};
