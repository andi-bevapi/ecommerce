import React from 'react';
import {Card} from 'react-bootstrap';
import Rating from "../rating/Rating";
import {Link} from "react-router-dom";
const Product = (props) => {
  return (
    <>
      <Card>
          <Link to={`/products/${props.product._id}`}>
            <Card.Img src={props.product.image} />
          </Link>

         <Card.Body>
          <Link to={`/products/${props.product._id}`}>
              <Card.Title as='div'>
                <strong>
                  {props.product.name}
                </strong>
              </Card.Title>
          </Link>
          <Card.Text as='div'>
            <Rating value={props.product.rating} text={`${props.product.numReviews} reviews`}/>
          </Card.Text>
            <Card.Text as='h3'>${props.product.price}</Card.Text>
         </Card.Body>
      </Card>
    </>
  )
}

export default Product