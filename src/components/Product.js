// Product.js
import React from 'react';
import { useCart } from './CartContext';

const Product = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="max-w-xs mx-auto overflow-hidden rounded shadow-lg mb-6">
      <img src={product.image} alt={product.title} className="w-full" />
      <div className="px-4 py-2">
        <h2 className="font-bold text-xl mb-2">{product.title}</h2>
        <p className="text-gray-700">${product.price.toFixed(2)}</p>
        <button
          className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
