import React from "react";
import Modal from '../UI/Modal'
import classes from './Cart.module.css'
import CartTable from './CartTable'
import { Button, Container } from "react-bootstrap";

const Cart =(props)=>{
    const cartElements = [
        {        
        title: 'Colors',        
        price: 100,        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',        
        quantity: 2,        
        },        
        {        
        title: 'Black and white Colors',
        price: 50,        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',        
        quantity: 3,        
        },        
        {
        title: 'Yellow and Black Colors',        
        price: 70,        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',        
        quantity: 1,        
        }
        ]
    return( 
        <Modal>
    <Container  className={classes.container}>
        <h3>Cart</h3>
          <CartTable list={cartElements}>

          </CartTable>
          <Button className={classes.btn} variant="primary">Purchase </Button>
        </Container> 
        </Modal> 
    )
}
export default Cart;