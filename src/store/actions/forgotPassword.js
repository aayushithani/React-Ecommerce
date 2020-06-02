import * as actionTypes from './actionTypes';

export const forgotPassword = (token) => {
    console.log("FORGOT PASSWORD Action triggered token: ", token);
    return {
      type: actionTypes.FORGOT_PASSWORD,
      token: token,
    };
  };
  