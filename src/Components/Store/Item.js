import React, { useContext } from "react";
import { Card,Button } from "react-bootstrap";
import classes from './Item.module.css'
import CartContext from "../../Store/CartContext";

const Item=(props)=>{
const ctx=useContext(CartContext)

const addToCart=(e)=>{
const price=e.target.parentElement.firstChild.textContent.substring(1)
const title=e.target.parentElement.parentElement.firstChild.textContent //title
const imageUrl=e.target.parentElement.parentElement.childNodes[1].src

const currItem={price:price,title:title,imageUrl:imageUrl}
ctx.addItem(currItem)

}

    return(
        <Card className={classes.card}>
            <Card.Title>{props.product.title}</Card.Title>
 <Card.Img variant="top" src={props.product.imageUrl} />
      <Card.Body>
        
        <Card.Text>
          ${props.product.price}
        </Card.Text>
        <Button variant="primary" onClick={addToCart}>Add to cart</Button>
      </Card.Body>
        </Card>
    )
}

export default Item;