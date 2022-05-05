import React from "react";
import Product from "../product/Product";
import { Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";

const HomeScreen = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const result = await axios.get("http://localhost:9595/api/products");
      setProduct(result.data);
    } catch (error) {
      console.log("errors--getProducts-", error);
    }
  };

  return (
    <>
      <h1>Latest products</h1>
      <Row>
        {products.map((product, index) => {
          return (
            <Col key={index} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default HomeScreen;
