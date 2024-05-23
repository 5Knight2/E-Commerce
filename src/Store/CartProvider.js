import CartContext from "./CartContext";

import React,{useState,useEffect} from "react";

const CartProvider=(props)=>{
const [items,setItems]=useState([
    {        
    title: 'Colors',        
    price: 100,        
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',        
    quantity: 3,        
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
    ]);
const [total,setTotal]=useState(0);
const addItemHandler=(currItem)=>{
   
  setItems((oldItems) => {
    const itemIndex = oldItems.findIndex(
      (item) =>
        item.title === currItem.title &&
        item.price == currItem.price &&
        item.imageUrl === currItem.imageUrl
    );

    
    if (itemIndex > -1) {
      const updatedItems = [...oldItems];
      updatedItems[itemIndex].quantity++;
      return updatedItems;
    }

    return [...oldItems, { ...currItem, quantity: 1 }];
  });
console.log(items)
};

useEffect(() => {
    console.log('Items updated:', items);
  }, [items]);
const removeItemHandler=(currItem)=>{

}

    const cartList={
        items:items,
        total:total,
        addItem:addItemHandler,
        removeItem:removeItemHandler
    }

    return(
        <CartContext.Provider value={cartList}>
{props.children}
        </CartContext.Provider>
    )
}
export default CartProvider;