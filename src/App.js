import React,{useState} from 'react';
import './App.css';
import Home from './Components/Home/Home' 
import CartProvider from './Store/CartProvider'
import Cart from './Components/Cart/Cart'


function App() {
const[showCart,setShowCart]=useState(false);
console.log(showCart)

const cartClicked=()=>{
  setShowCart((state)=>!state)
}

  return (
    <div className='app'>
        <CartProvider >
      
      {showCart && <Cart></Cart>}  
       <Home cartClicked={cartClicked}></Home>
     </CartProvider>
    </div>
  
  );
}

export default App;
