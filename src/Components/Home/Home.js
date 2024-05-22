import React from "react";
import Header from './Header';
import Footer from './Footer';
import Products from "./Products";

const Home=(props)=>{

    return(<React.Fragment>
        <Header cartClicked={props.cartClicked}></Header>
        <Products></Products>
          <Footer></Footer>
    </React.Fragment>
        
    )
}

export default Home;