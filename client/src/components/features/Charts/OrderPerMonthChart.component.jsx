import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function OrderPerMonthChart({ items }) {
  // items.map((i) => console.log(i));

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "number of orders per month",
      },
    },
  };
const FilteredByOrderCost = items?.filter(item => item.orderInfo.purchaseSum> 700)
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: [...FilteredByOrderCost.map(item => item.orderInfo.purchaseSum)],
        backgroundColor: "#cd2134",
      },
      {
        label: "Avg of items per cart ",
        data: [...FilteredByOrderCost.slice(0, 5).map((item) => item.orderInfo.purchaserInfo.purchaseSum
)],
        backgroundColor: "#cfe2ff"
      },
    ],
  };
  return <Bar options={options} data={data} />;
}
// data: [...items.slice(0, 7).map((item) => if(item.price > 700) {item.orderInfo.purchaseSum}
