import React from "react";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
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
      text: "Total number of products",
    },
  },
};
export const BarGraph = () => {
  const { product } = useSelector((store) => store.productsData);
  const labels = product.map((item) => item.title);
  const data = {
    labels,
    datasets: [
      {
        label: "Quantity",
        data: product.map((item) => item.qty),
        backgroundColor: `rgba(${Math.ceil(Math.random() * 255)}, ${Math.ceil(
          Math.random() * 255
        )}, ${Math.ceil(Math.random() * 255)}, 0.8)`,
      },
      {
        label: "Price",
        data: product.map((item) => item.price),
        backgroundColor: `rgba(${Math.ceil(Math.random() * 255)}, ${Math.ceil(
          Math.random() * 255
        )}, ${Math.ceil(Math.random() * 255)}, 0.8)`,
      },
      {
        label: "Sales Price",
        data: product.map((item) => item.salesPrice),
        backgroundColor: `rgba(${Math.ceil(Math.random() * 255)}, ${Math.ceil(
          Math.random() * 255
        )}, ${Math.ceil(Math.random() * 255)}, 0.8)`,
      },
    ],
  };
  return (
    <>
      <Bar options={options} data={data} />
    </>
  );
};
