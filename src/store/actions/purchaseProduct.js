import * as actionTypes from './actionTypes';

export const purchaseProduct = (orderData,access_token) => {
    console.log("Action triggered token: ", access_token);
    console.log("Action triggered orderData :", orderData);
    return {
      type: actionTypes.ADD_PRODUCT,
      orderData: orderData,
    };
  };
  