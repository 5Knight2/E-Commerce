import React,{useState} from 'react';
import './App.css';
import Home from './Components/Home/Home' 

import Cart from './Components/Cart/Cart'


function App() {
const[showCart,setShowCart]=useState(false);
console.log(showCart)

const cartClicked=()=>{
  setShowCart((state)=>!state)
}

  return (
    <div className="App">
     {showCart && <Cart></Cart>}  
      <Home cartClicked={cartClicked}></Home>
    </div>
  );
}

export default App;
