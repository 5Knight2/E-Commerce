import React from "react";
import classes from './CartTable.module.css'
    import { Container,Row,Col } from "react-bootstrap";
import CartItem from "./CartItem";
import CartQuantity from "./CartQuantity";




const CartTable=(props)=>{
    let total=0;
    const Items=props.list.map((c,i,a)=>{
        total=total+props.list[i].price;
        return( <Row>
        <Col><CartItem imageUrl={props.list[i].imageUrl} title={props.list[i].title}></CartItem></Col>
          <Col>${props.list[i].price}</Col>
          <Col><CartQuantity quantity={props.list[i].quantity}></CartQuantity></Col>
        
        </Row>)})
    return (
       
        <Container>
        <Row className={classes.row_head}>
        <Col >Item</Col>
          <Col>Price</Col>
          <Col>Quantity</Col>
        
        </Row>
        {Items}
       
       <Row className={classes.row_head}>
       <Col>Total={total}</Col>
       </Row>
      </Container>
     
    )
}
export default CartTable;