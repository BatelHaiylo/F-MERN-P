import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import SaleInfo from "./SaleInfo.component";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function ProductsCard({ items }) {
  console.log(items);

  return (
    <>
      <Row xs={1} md={3} className="g-1">
        {items ? (
          items.slice(0,3).map(
            ({
              _id,
              ProductName,
              img,
              department,
              price,
              quantity,
              isOnSale,
              sale,
              updatedAt,
              createdAt,
            }) => (
              <Col>
                <Card key={_id} style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={img} />
                  <Card.Body>
                    <Card.Title>{ProductName}</Card.Title>
                    <Card.Text>
                      <span>department: {department.departmentName}</span>
                      <span>
                        price:{" "}
                        {isOnSale ? (
                          <span>
                            <b style={{ textDecoration: "line-through" }}>
                              {price}
                            </b>
                            {sale.salePrice}
                          </span>
                        ) : (
                          <span>{price}</span>
                        )}
                      </span>
                      <span>quantity: {quantity}</span>
                      <span>added in: {createdAt}</span>
                      <span>
                        sale:{" "}
                        {isOnSale ? (
                          <SaleInfo key={sale._id} info={sale} />
                        ) : (
                          <span>{ isOnSale }</span>
                        )}
                      </span>
                      <span>last update: {updatedAt}</span>
                    </Card.Text>
                    <Button variant="primary">MORE DATA</Button>
                  </Card.Body>
                </Card>
              </Col>
            )
          )
        ) : (
          <Card style={{ width: "18rem" }}>
            <Card.Body>no products was found</Card.Body>
          </Card>
        )}
      </Row>
    </>
  );
}
