import * as actionTypes from "../actions/actionTypes";

const initialState = [];

const addToCart = (state, action) => {
  
  let tempState = state;
  let flag = false;
  console.log("REDUCER tempstate:",tempState);
  tempState.forEach((element) => {
    console.log("REDUCER element:",tempState);
    console.log("REDUCER:" , element.ProductVariationID);

    if (element.ProductVariationID === action.cartItem.ProductVariationID) {
      flag = true;
      console.log("REDUCER QUANTITY",element.Quantity);

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
  console.log("DELETE REDUCER: ",temp);
  
  let temp2 = temp.filter((item) => {
    console.log("item REDUCER: ",item);
    console.log("PRODUCT VARIATION ID: ",item.ProductVariationID)
    console.log("REDUCER ACTION.CARTITEM:", action.cartItem)
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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CART_ADD:
      return addToCart(state, action);
    case actionTypes.CART_DELETE:
      return deleteFromCart(state, action);
    default:
      return state;
  }
};

export default reducer;
