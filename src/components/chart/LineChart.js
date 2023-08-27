import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
      text: "Growth of users",
    },
  },
};

export const LineChart = ({ users }) => {
  const labels = users?.map((user) => user.fName);
  const data = {
    labels,
    datasets: [
      {
        label: "list of users",
        data: users?.map((user) => {
          const date = new Date(user.createdAt);
          const month = date.toLocaleString("default", { month: "2-digit" });
          console.log(month);
          return month;
        }),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: `rgba(${Math.ceil(Math.random() * 255)}, ${Math.ceil(
          Math.random() * 255
        )}, ${Math.ceil(Math.random() * 255)}, 1)`,
      },
    ],
  };
  return <Line options={options} data={data} />;
};
