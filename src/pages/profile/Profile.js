import React from "react";
import { AdminLayout } from "../../components/layout/AdminLayout";
import { EditProfile } from "../../components/profile/EditProfile";

export const Profile = () => {
  return (
    <AdminLayout title="Profile">
      <EditProfile />
    </AdminLayout>
  );
};
