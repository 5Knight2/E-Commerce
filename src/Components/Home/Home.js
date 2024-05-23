import React from "react";
import Header from './Header';
import Footer from './Footer';
import Products from "./Products";
import About from '../About/About'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router=createBrowserRouter([{path:'/',element:<Products/>},
{path:'/about',element:<About></About>}])

const Home=(props)=>{

    return(<React.Fragment>
        <Header cartClicked={props.cartClicked}></Header>
        <RouterProvider router={router}></RouterProvider>
          <Footer></Footer>
    </React.Fragment>
        
    )
}

export default Home;