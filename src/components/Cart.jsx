import React from 'react';
import { useCart } from './CartContext';

const Cart = () => {
  const { cartItems, totalPrice, increaseQuantity, decreaseQuantity } = useCart();
  const uniqueItems = Array.from(new Set(cartItems));
  return (
    <div className="container mx-auto my-10 p-6 bg-gray-100 rounded shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
      {uniqueItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div>
          {uniqueItems.map((product) => (
            <div key={product.id} className="flex items-center justify-between border-b-2 py-2">
              <img src={product.image} alt={product.title} className="w-20 h-20 object-cover rounded" />
              <div className="flex-1 px-4">
                <p className="font-semibold">{product.title}</p>
                <p className="text-gray-600">${product.price}</p>
              </div>
             

              <div class="flex items-center">
                <button onClick={() => decreaseQuantity(product)} class="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-l focus:outline-none">-</button>
                <p class="text-lg font-semibold mx-2">{cartItems.filter(item => item === product).length}</p>
                <button onClick={() => increaseQuantity(product)} class="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-r focus:outline-none">+</button>
              </div>

            </div>
          ))}
          <hr className="my-4" />
          <p className="text-xl font-semibold">Total: ${totalPrice.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
