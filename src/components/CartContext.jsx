import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  const value = {
    cartCount,
    addToCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
