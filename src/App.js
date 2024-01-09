import React, { Children } from "react";
import './App.css';
import Body from "./components/Body";
import Header from './components/Header';

import Footer from "./components/Footer";
import Bestsellers from "./components/Pages/Bestsellers";
import { CartProvider } from './components/CartContext';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; // for routing our page import createBrowserRouter and RouterProvider for providing router & Outlet for children component for nested routing
import ReactDOM from "react-dom/client";
import Login from "./components/Pages/Login/Login";
import Signup from "./components/Pages/Login/SignUp";
import 'bootstrap/dist/css/bootstrap.min.css';


function App(){
  return (
    
      <CartProvider>
        <Header />
        <Outlet/>
        <Footer/>
        </CartProvider>
      
    
  );
}


const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/bestsellers",
        element:<Bestsellers/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/signup",
        element:<Signup/>
      }
     
    ],
  }
]);

export default App;

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);