import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
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
import { useParams } from "react-router-dom";
import products from "../../products";

const ProductScrean = () => {
  const { id } = useParams();
  const [product,setProduct] = useState([]);

  useEffect(()=>{
    productById(id);
  },[])

  const productById = async (id) => {
    try{
        const result = await axios.get(`http://localhost:9595/api/products/${id}`);
       setProduct(result.data[0]);
    }catch(error){
      console.log("error in productById",error);
    }
  }

  console.log("product-----",product);
  
  return (
    <>
      <Link className="btn btn-light my-3" to="">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} fluid />
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
              </ListGroup.Item>
              <ListGroup.Item>Price : $ {product.price}</ListGroup.Item>
              <ListGroup.Item>
                Description : {product.description}
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
                    <strong>{product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status :</Col>
                  <Col>
                    {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
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
