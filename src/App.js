import React,{useState} from 'react';
import './App.css';
import Store from './Components/Store/Store' 
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
       <Store cartClicked={cartClicked}></Store>
     </CartProvider>
    </div>
  
  );
}

export default App;
