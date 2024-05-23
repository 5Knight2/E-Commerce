import React from "react";
import { Button, Container, Form, Image, InputGroup } from "react-bootstrap";
import classes from './CartQuantity.module.css'

const CartQuantity=(props)=>{

    return(
        <Container className={classes.container}>
            <h6 className={classes.input}>{props.quantity} 
            </h6>
           <Button variant="danger">Remove</Button>
        </Container>
    )
}

export default CartQuantity;