import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {      //custom hook that allow components to use cart context
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {       //act as provider 
  const [cartItems, setCartItems] = useState([]);      //state variables to manage the cart items,total prices, cart count
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {   //for updating cart counts
    let count = 0;
    cartItems.forEach((item) => {
      count += 1; // Increment count for each item
    });
    setCartCount(count);
  }, [cartItems]);

  // const addToCart = (product) => {
  //   setCartItems([...cartItems, product]);
  //   setTotalPrice((prevTotal) => prevTotal + product.price);
  // };

  // const removeFromCart = (product) => {
  //   const updatedCart = cartItems.filter((item) => item !== product);
  //   setCartItems(updatedCart);
  //   setTotalPrice((prevTotal) => prevTotal - product.price);
  // };


  // ************FUNCTIONS TO MODIFY CARTS***************
  const increaseQuantity = (product) =>{
    const itemExists=cartItems.find((item) => item.id==product.id);
      if (itemExists) {
        setCartItems([...cartItems, product]);
        setTotalPrice((prevTotal) => prevTotal + product.price);        
      } else{
        setCartItems([...cartItems, product]);
        setTotalPrice((prevTotal) => prevTotal + product.price);
      }

   
  };
  
  const decreaseQuantity = (product) => {
    const itemIndex=cartItems.find((item) => item.id==product.id);
      if (itemIndex!==-1) {
        const updatedCart=[...cartItems];
        updatedCart.splice(itemIndex, 1); // ek quantity remove krne ke liye
        setCartItems(updatedCart);
        setTotalPrice((prevTotal) => prevTotal - product.price); //price reduce ke liye
      }
  };


  // const decreaseQuantity = (product) =>{
  //   const updatedCart = cartItems.filter((item) => item!== product);
  //   setCartItems(updatedCart);
  //   setTotalPrice((prevTotal) => prevTotal - product.price);
  // }

  const value = {     //CONTEXT VALUES
    cartItems,
    totalPrice,
    cartCount:cartItems.length, // Cart count based on the length of cartItems
    increaseQuantity,
    decreaseQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
