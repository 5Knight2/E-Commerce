import React from "react";
import { Card,Button } from "react-bootstrap";
import classes from './Item.module.css'

const Item=(props)=>{

    return(
        <Card className={classes.card}>
            <Card.Title>{props.product.title}</Card.Title>
 <Card.Img variant="top" src={props.product.imageUrl} />
      <Card.Body>
        
        <Card.Text>
          ${props.product.price}
        </Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
        </Card>
    )
}

export default Item;