import React, { useContext } from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { ordersContext } from "../../context/OrdersProvider.component";

ChartJS.register(CategoryScale, LinearScale, BarElement);


  // const Data = {
  //   labels: getOrdersSpecificData(orders,date),
  //   datasets: [
  //     {
  //       label: "avg. 502 orders",
  //       data: getOrdersSpecificData(orders,itemsNum),
  //       borderWidth: 1,
  //     },
  //   ],
  // };
  // const getOrdersSpecificData = (arr,param) => {
  //   const Dates = []
  //   Object.keys(orders.orderInfo).map(data => 
  //     Dates.push(data.param))
  //     return Dates
  // }


  // export default function BarChart() {
  // const { orders, setOrders } = useContext(ordersContext);
  // if(!orders) return console.log("sdsg");
  // console.log((orders))

  // const data = {

  //   labels: orders?.Object.keys(orders.orderInfo)?.map(order => order.orderInfo),

  //   datasets: [
  //     {
  //       type: "line",
  //       label: "Reservations within the last 7 days",
  //       data:orders?.Object.keys(orders.orderInfo)?.map(order => order?.orderInfo) ,
  //       borderColor: "rgb(53,162,235)",
  //       backgroundColor: "rgba(53,162,235,0.4)",
  //     },
  //   ],
  //     label: "orders in the last week",
  //     data: orders?.Object.keys(orders.orderInfo)?.map(order => order?.itemsNum)
  
  // };

  // const Options = {
  //   maintainAspectRatio: false,
  //   scales: {
  //   },
  //   legend: {
  //     labels: {
  //       fontSize: 25,
  //     },
  //   },
  // }
  //   // scales: {
  //           // y: orders?.Object.keys((orders.orderInfo)?.map(order => order.purchaseSum)
  //   //   

  //   return (
  //     <div>
  //       <Bar
  //         data={data}
  //         height={400}
  //         options={Options}
  
  //       />
  //     </div>
  //   )
  // };