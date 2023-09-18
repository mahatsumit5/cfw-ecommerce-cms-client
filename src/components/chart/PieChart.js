import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Title, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";
ChartJS.register(ArcElement, Tooltip, Title, Legend);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
      text: "Total items available according to their catagories",
    },
  },
};
export function PieChart() {
  const { catalogue } = useSelector((store) => store.catagoryInfo);
  const { product } = useSelector((store) => store.productsData);
  let array = [];
  const [datatoShow, setDatatoShow] = useState([]);
  catalogue.map((cat) => {
    const isIncluded = product.map((product) => cat._id === product.parentCat);

    isIncluded.map((bool) => {
      if (bool) {
        array.push(cat.title);
      }
    });
  });
  useEffect(() => {
    let itemCounts = {};
    array.forEach((item) => {
      if (itemCounts[item] === undefined) {
        itemCounts[item] = 1; // Initialize count for new item
      } else {
        itemCounts[item] += 1; // Increment count for existing item
      }
    });
    setDatatoShow(itemCounts);
  }, [catalogue, product]);
  const newData = Object.entries(datatoShow); //changes object to array
  const data = {
    labels: newData.map((item) => item[0]),
    datasets: [
      {
        label: newData.map((item) => item[0]),
        data: newData.map((item) => item[1]),
        backgroundColor: newData.map((item) => {
          return `rgba(${Math.ceil(Math.random() * 255)}, ${Math.ceil(
            Math.random() * 255
          )}, ${Math.ceil(Math.random() * 255)}, 0.5)`;
        }),
        borderColor: newData.map((item) => {
          return `rgba(${Math.ceil(Math.random() * 255)}, ${Math.ceil(
            Math.random() * 255
          )}, ${Math.ceil(Math.random() * 255)}, 0.8)`;
        }),
        borderWidth: 1,
      },
    ],
  };
  return <Pie options={options} data={data} />;
}
