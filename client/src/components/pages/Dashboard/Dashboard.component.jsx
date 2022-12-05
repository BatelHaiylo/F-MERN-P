import React, { useContext } from "react";
import { productsContext } from "../../../context/ProductsProvider.component";
import { ordersContext } from "../../../context/OrdersProvider.component";
import {usersContext} from "../../../context/UsersProvider.component";
import ProductsCard from "../../features/products/ProductsCard.component";
import VerticalBarChart from "../../features/Charts/VerticaBarChart.components";
import OrderPerMonthChart from "../../features/Charts/OrderPerMonthChart.component";
import DoughnutChart from "../../features/Charts/DoughnutChart.component";
import OrderPerDayChart from "../../features/Charts/OrderPerDayChart.component";
import HighestOrderDay from "../../features/orders/HighestOrderDay.component";
import SmartTable from "../../features/Table/SmartTable.component";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Dashboard() {
  const { products } = useContext(productsContext);
  const { orders } = useContext(ordersContext);
  const { users } = useContext(usersContext);
  return (
    <>
      <br />
      <Row xs={1} md={2} className="g-4">
        <Col>
          <div>
            <VerticalBarChart items={products} />
          </div>
        </Col>

        {/* number of orders per month */}
        <Col>
        <div style={{ width: '30rem', height: '15rem' }}>
            <OrderPerMonthChart items={orders} />
          </div>
        </Col>

        {/* number of orders per day */}
        <Col>
        <div style={{ width: '30rem', height: '15rem' }}>
            <OrderPerDayChart items={orders} />
          </div>
        </Col>

        <Col>
        <div style={{ width: '30rem', height: '15rem' }}>
          <DoughnutChart items={products} />
          </div>
        </Col>

        <Col>
          <div style={{ width: '30rem', height: '15rem' }}>
            <ProductsCard items={products} />
          </div>
        </Col>

        <Col>
          <div style={{ width: '30rem', height: '15rem' }}>
            <HighestOrderDay items={orders} />
          </div>
        </Col>

        <Col>
        <div>
          <SmartTable data={users}/>
          </div>
          </Col>


      </Row>
    </>
  );
}
