import * as actionTypes from "../actions/actionTypes";

const initialState = [];

const addToCart = (state, action) => {
  
  let tempState = state;
  let flag = false;
  tempState.forEach((element) => {
    if (element.ProductVariationID === action.cartItem.ProductVariationID) {
      flag = true;
      let newQuantity = element.Quantity + 1;
      element.Quantity = newQuantity;
    }
  });
  if (!flag) {
    tempState.push({
      ...action.cartItem,
      Quantity: 1,
    });
  }
  return tempState;
};

const deleteFromCart = (state, action) => {
  let temp = state;
  let temp2 = temp.filter((item) => {
    if (item.ProductVariationID === action.cartItem) {
      if (item.Quantity === 1) {
      } else {
        item.Quantity = item.Quantity - 1;
        return item;
      }
    } else if (item.ProductVariationID !== action.cartItem) {
      return item;
    }
    return null;
  });
  return temp2;
};

const emptyCart = (state) => { 
  return {
    
  } 
}


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CART_ADD: return addToCart(state, action);
    case actionTypes.CART_DELETE: return deleteFromCart(state, action);
    case actionTypes.CART_EMPTY: return emptyCart(state);
    default: return state;
  }
};

export default reducer;
