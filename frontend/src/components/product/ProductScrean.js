import React from "react";

import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
} from "react-bootstrap";
import Rating from "../rating/Rating";
import products from "../../products";
import { useParams } from "react-router-dom";

const ProductScrean = () => {
  const { id } = useParams();

  const product = products.filter((el) => {
    //console.log("id-----",el._id)
    return el._id == id;
  });

  console.log(product);
  //const product = products.find((el,index) => { return el._id ===  });
  return (
    <>
      <Link className="btn btn-light my-3" to="">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product[0].image} fluid />
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product[0].name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={product[0].rating}
                  text={`${product[0].numReviews} reviews`}
                />
              </ListGroup.Item>
              <ListGroup.Item>Price : $ {product[0].price}</ListGroup.Item>
              <ListGroup.Item>
                Description : {product[0].description}
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col>
          <Card>
            <ListGroup variant="flush">
            <ListGroup.Item>
                <Row>
                  <Col>Price :</Col>
                  <Col>
                    <strong>{product[0].price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status :</Col>
                  <Col>
                    {product[0].countInStock > 0 ? "In Stock" : "Out Of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button className="btn-block" type="button">
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScrean;
