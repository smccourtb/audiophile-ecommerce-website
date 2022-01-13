export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const UPDATE_QUANTITY = "UPDATE_QUANTITY";
export const EMPTY_CART = "EMPTY_CART";

const addProductToCart = (product, amount, state) => {
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(
    (item) => item.id === product.id
  );
  if (updatedItemIndex < 0) {
    updatedCart.push({ ...product, quantity: amount });
  } else {
    const updatedItem = {
      ...updatedCart[updatedItemIndex],
    };
    updatedItem.quantity += amount;
    updatedCart[updatedItemIndex] = updatedItem;
  }
  return { ...state, cart: updatedCart };
};

const removeProductFromCart = (productId, amount, state) => {
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(
    (item) => item.id === productId
  );

  const updatedItem = {
    ...updatedCart[updatedItemIndex],
  };
  const amountToRemove = updatedItem.quantity - amount + 1;
  updatedItem.quantity -= amountToRemove;
  if (updatedItem.quantity <= 0) {
    updatedCart.splice(updatedItemIndex, 1);
  } else {
    updatedCart[updatedItemIndex] = updatedItem;
  }

  return { ...state, cart: updatedCart };
};

export const updateQuantity = (productId, amount, state) => {
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(
    (item) => item.id === productId
  );
  const updatedItem = {
    ...updatedCart[updatedItemIndex],
  };
  const amountToAdd = amount - updatedItem.quantity + 1;
  updatedItem.quantity += amountToAdd;
  updatedCart[updatedItemIndex] = updatedItem;
  return { ...state, cart: updatedCart };
};

export const clearCart = (state) => {
  return { ...state, cart: [] };
};

export const shopReducer = (state, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return addProductToCart(action.product, action.amount, state);
    case REMOVE_PRODUCT:
      return removeProductFromCart(action.productId, action.amount, state);
    case UPDATE_QUANTITY:
      return updateQuantity(action.productId, action.amount, state);
    case EMPTY_CART:
      return clearCart(state);
    default:
      return state;
  }
};
