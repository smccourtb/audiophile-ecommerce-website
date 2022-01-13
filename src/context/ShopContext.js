import React from "react";
import data from "../data.json";

export default React.createContext({
  products: data,
  cart: [],
  addProductToCart: (product, amount) => {},
  removeProductFromCart: (productId, amount) => {},
  updateQuantity: (productId, amount) => {},
  clearCart: () => {},
});
