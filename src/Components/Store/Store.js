import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Products from './Products';
import About from '../About/About';
import Home from '../Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  { path: '/store', element: <Products /> },
  { path: '/about', element: <About /> },
  {path:'/' ,element:<Home/>}
]);

const Store = (props) => {
  return (
    <React.Fragment>
          <Header cartClicked={props.cartClicked} router={router} />
         <RouterProvider router={router} />
    
     
      <Footer />
    </React.Fragment>
  );
};

export default Store;
