import React from "react";
import { Container } from "react-bootstrap";
import Item from './Item'
import classes from './Products.module.css'

const Products=()=>{
    const productsArr = [
        {        
        title: 'Colors',        
        price: 100,        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',        
        },        
        {        
        title: 'Black and white Colors',        
        price: 50,        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        },
        {     
        title: 'Yellow and Black Colors',                price: 70,        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        },
        {title: 'Blue Color',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png', 
        }
        
        ]

        const List=productsArr.map((c,i,a)=>{
            return(<Item product={productsArr[i]}></Item>)})
        
        return(<Container className={classes.container}>
            {List}
        </Container>

        )
}
 export default Products;