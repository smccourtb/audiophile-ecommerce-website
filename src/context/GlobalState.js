import React, { useReducer } from "react";
import ShopContext from "./ShopContext";
import {
  ADD_PRODUCT,
  EMPTY_CART,
  REMOVE_PRODUCT,
  shopReducer,
  UPDATE_QUANTITY,
} from "./reducers";
import data from "../data.json";

function GlobalState(props) {
  const products = data;

  // const [cart, setCart] = useState([]);

  const [cartState, dispatch] = useReducer(shopReducer, { cart: [] });

  const addProductToCart = (product, amount) => {
    dispatch({ type: ADD_PRODUCT, product: product, amount: amount });
  };
  const updateQuantity = (id, amount) => {
    dispatch({ type: UPDATE_QUANTITY, productId: id, amount: amount });
  };
  const removeProductFromCart = (productId, amount) => {
    dispatch({ type: REMOVE_PRODUCT, productId: productId, amount: amount });
  };
  const clearCart = () => {
    dispatch({ type: EMPTY_CART });
  };
  return (
    <ShopContext.Provider
      value={{
        products: products,
        cart: cartState.cart,
        updateQuantity: updateQuantity,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
        clearCart: clearCart,
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
}

export default GlobalState;
