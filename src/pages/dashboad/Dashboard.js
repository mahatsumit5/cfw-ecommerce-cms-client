import React from "react";
import { AdminLayout } from "../../components/layout/AdminLayout";
import { BasicCard } from "../../components/dashboard/DashboardCard";
import { BarGraph } from "../../components/chart/BarGraph";
import { PieChart } from "../../components/chart/PieChart";
import { LineChart } from "../../components/chart/LineChart";

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
    p: "Expenses",
    number: 52525,
    percent: "3%",
    days: "20day",
  },
  {
    p: "Users",
    number: 52525,
    percent: "3%",
    days: "20day",
    chart: <LineChart />,
  },
];

export const Dashboard = () => {
  return (
    <AdminLayout title="Dashboard">
      <div className="d-flex justify-content-center gap-3">
        {data?.map((info, index) => (
          <BasicCard info={info} key={index} />
        ))}
      </div>
      <div
        className="d-flex justify-content-around p-2 shadow  mt-5 rounded gap-5 "
        style={{ height: "500px" }}
      >
        <BarGraph />

        <PieChart />
      </div>
    </AdminLayout>
  );
};
