import React, { useEffect, useState } from "react";
import { AdminLayout } from "../../components/layout/AdminLayout";
import { BasicCard } from "../../components/dashboard/DashboardCard";
import { BarGraph } from "../../components/chart/BarGraph";
import { PieChart } from "../../components/chart/PieChart";
import { LineChart } from "../../components/chart/LineChart";
import { getAllUsers } from "../../axiosHelper/userAxios";

export const Dashboard = () => {
  const [users, setUsers] = useState();
  const data = [
    {
      p: "New orders",
      number: 52525,
      percent: "3%",
      days: "20day",
    },
    {
      p: "Total Income",
      number: 292920,
      percent: "3%",
      days: "20day",
    },

    {
      p: "Users",
      number: 52525,
      percent: "3%",
      days: "20day",
      chart: <LineChart users={users} />,
    },
  ];
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
        {data?.map((info, index) => (
          <BasicCard info={info} key={index} users={users} />
        ))}
      </div>
      <div
        className="d-flex justify-content-center p-2 shadow flex-direction-cloumn mt-5 rounded gap-5  flex-wrap "
        style={{ height: "auto" }}
      >
        <div style={{ height: "auto", width: "100vw" }}>
          <BarGraph />
        </div>
        <div
          className="d-flex justify-content-center"
          style={{ height: "400px", width: "100%" }}
        >
          <PieChart users={users} />
        </div>
      </div>
    </AdminLayout>
  );
};
