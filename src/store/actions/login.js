import * as actionTypes from './actionTypes';

export const loginSuccess = (access_token) => {
    return {
      type: actionTypes.LOGIN_SUCCESS,
      access_token: access_token,
    };
  };

  export const userRole = (authority) => {
    return {
      type: actionTypes.USER_ROLE,
      authority: authority,
    };
  };

  export const logoutSuccess = () => {
    return {
      type: actionTypes.LOGOUT_SUCCESS
    };
  };
    