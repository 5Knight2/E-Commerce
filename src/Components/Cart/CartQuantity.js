import React from "react";
import { Button, Container, Form, Image, InputGroup } from "react-bootstrap";
import classes from './CartQuantity.module.css'

const CartQuantity=(props)=>{

    return(
        <Container className={classes.container}>
            <Form >
            <Form.Control className={classes.input} type="number" value={props.quantity} />
            </Form>
           <Button variant="danger">Remove</Button>
        </Container>
    )
}

export default CartQuantity;