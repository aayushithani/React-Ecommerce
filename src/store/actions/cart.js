import * as actionTypes from './actionTypes';

export const addToCart = (cartItem) => {
    return {
      type: actionTypes.CART_ADD,
      cartItem: cartItem,
    };
  };

  export const deleteFromCart = (cartItem) => {
    return {
      type: actionTypes.CART_DELETE,
      cartItem: cartItem,
    };
  };


  export const emptyCart = () => {
    return {
      type: actionTypes.CART_EMPTY    
    };
  };
