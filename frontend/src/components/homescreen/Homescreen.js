import React from 'react'
import Product from "../product/Product";
import { Row , Col } from 'react-bootstrap';
import products from "../../products";

const HomeScreen = () => {
    
    console.log("props---",products);

  return (
    <>
        <h1>Latest products</h1>
        <Row>
        {products.map((product,index)=>{
                return(
                    <Col key={index} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product}/>
                    </Col>
                )
            })}
        </Row>
    </>
  )
}

export default HomeScreen