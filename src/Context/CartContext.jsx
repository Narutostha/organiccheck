import React, { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../Reducer/cartReducer";

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};
const useCart = () => useContext(CartContext);

export default CartContextProvider;
export { useCart };
