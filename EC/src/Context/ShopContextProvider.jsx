import React, { useState } from "react";
import { ShopContext } from "@/Context/ShopContext";
import all_product from "../Components/Assets/all_product"; 

const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const cart = {};
    for (let i = 0; i < all_product.length; i++) {
      cart[all_product[i].id] = 0;
    }
    return cart;
  });

  const addToCart = (itemId) =>
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));

  const removeFromCart = (itemId) =>
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));

  const getTotalCartAmount = () =>
    Object.keys(cartItems).reduce((total, itemId) => {
      if (cartItems[itemId] > 0) {
        const item = all_product.find((p) => p.id === Number(itemId));
        total += item.new_price * cartItems[itemId];
      }
      return total;
    }, 0);

  const getTotalCartItems = () =>
    Object.values(cartItems).reduce((sum, qty) => sum + qty, 0);

  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
