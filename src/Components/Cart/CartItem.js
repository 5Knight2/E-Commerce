import React from "react";
import { Container, Image } from "react-bootstrap";
import classes from './CartItem.module.css'

const CartItem=(props)=>{

    return(
        <Container className={classes.container}>
            <Image className={classes.image} src={props.imageUrl} width='50px'>
            </Image>
            <p className={classes.title}>{props.title}</p>
        </Container>
    )
}

export default CartItem;