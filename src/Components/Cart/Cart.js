import React, { useContext } from "react";
import Modal from '../UI/Modal'
import classes from './Cart.module.css'
import CartTable from './CartTable'
import { Button, Container } from "react-bootstrap";
import CartContext from "../../Store/CartContext";

const Cart =(props)=>{
  
const ctx=useContext(CartContext)
const cartElements = ctx.items;
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