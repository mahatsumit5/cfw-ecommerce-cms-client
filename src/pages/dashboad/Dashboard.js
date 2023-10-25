import React, { useEffect, useState } from "react";
import { AdminLayout } from "../../components/layout/AdminLayout";
import { BasicCard } from "../../components/dashboard/DashboardCard";
import { BarGraph } from "../../components/chart/BarGraph";
import { PieChart } from "../../components/chart/PieChart";
import { LineChart } from "../../components/chart/LineChart";
import { getAllUsers } from "../../axiosHelper/userAxios";

export const Dashboard = () => {
  const [users, setUsers] = useState();

  const getListOfUsers = async () => {
    const { users } = await getAllUsers();
    setUsers(users);
  };
  useEffect(() => {
    getListOfUsers();
  }, []);
  return (
    <AdminLayout title="Dashboard">
      <div className="d-flex justify-content-center gap-3 flex-wrap">
        <BasicCard />
      </div>

      <div
        className="d-flex justify-content-center flex-row flex-wrap   mt-5 "
        style={{ overflow: "auto" }}
      >
        {/* bar graph */}
        <div
          className=" p-5 d-flex justify-content-center"
          style={{ height: "400px" }}
        >
          <BarGraph />
        </div>
        {/* pie chart */}
        <div
          className=" mt-5 d-flex justify-content-center"
          style={{ height: "400px" }}
        >
          <PieChart users={users} />
        </div>
      </div>
    </AdminLayout>
  );
};
