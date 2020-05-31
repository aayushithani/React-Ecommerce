import * as actionTypes from './actionTypes';

export const loginSuccess = (access_token) => {
    console.log("Action triggered", access_token);
    return {
      type: actionTypes.LOGIN_SUCCESS,
      access_token: access_token,
    };
  };
  