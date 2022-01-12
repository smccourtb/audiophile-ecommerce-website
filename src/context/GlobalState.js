import React, { useReducer } from "react";
import ShopContext from "./ShopContext";
import { ADD_PRODUCT, REMOVE_PRODUCT, shopReducer } from "./reducers";

function GlobalState(props) {
  // const products = [
  //   { id: "p1", title: "Gaming Mouse", price: 29.99 },
  //   { id: "p2", title: "Harry Potter 3", price: 9.99 },
  //   { id: "p3", title: "Used plastic bottle", price: 0.99 },
  //   { id: "p4", title: "Half-dried plant", price: 2.99 },
  // ];

  // const [cart, setCart] = useState([]);

  const [cartState, dispatch] = useReducer(shopReducer, { cart: [] });

  const addProductToCart = (product, amount) => {
    dispatch({ type: ADD_PRODUCT, product: product, amount: amount });
  };

  const removeProductFromCart = (productId) => {
    dispatch({ type: REMOVE_PRODUCT, productId: productId });
  };

  return (
    <ShopContext.Provider
      value={{
        cart: cartState.cart,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
}

export default GlobalState;
