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

export default function OrderPerDayChart({ items }) {

let sum = 0
const SumPerObj =[...items.map(obj => obj.product.map(item => sum += item.price))]
// console.log();
// console.log("sum :" ,SumPerObj.map(item => item.reduce((a,b)=> a+b,0)));
// console.log("avg :" ,SumPerObj.map(item => item.reduce((a,b)=> a+b,0) / item.length));

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "number of orders per day",
      },
    },
  };
//   const labels = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const labels = [...items.map(item => new Date(`${item.orderInfo.purchaserInfo.date}`).toLocaleDateString())];
  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: SumPerObj.map(item => item.reduce((a,b)=> a+b,0)),
        backgroundColor: "#9ff0ed",
      },
      {
        label: "Avg of sum per chart ",
        data: SumPerObj.map(item => item.reduce((a,b)=> a+b,0) / item.length),
            backgroundColor: "#cfe2ff"
        },
    ],
};
return <Bar options={options} data={data} />;
}
// data: items.slice(0, 7).map(item => (item.product.reduce((a, b) => a.price + b.price)) / (item.product.length)),

// (+item.product[2].price) + (+item.product[0].price) +  (+item.product[1].price)
// .product.reduce((a, b) => a.price + b.price) / (item.product.length)