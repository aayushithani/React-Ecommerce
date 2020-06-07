import * as actionTypes from '../actions/actionTypes';

const initialState={
    token : null,
    isAuthenticated:false,
    authority:null
}

const loginSuccess = (state, action) => {
    return {
      ...state,
      token:action.access_token,
      isAuthenticated:true
    }
}

const userRole = (state, action) => {
    return {
      ...state,
      authority:action.authority,    
    }
}

const logoutSuccess = (state) => {
    return {
      ...state,
      token:null,
      isAuthenticated:false,
      authority:null
    }   
}


const reducer = (state = initialState,action) => {
    switch(action.type){
        case actionTypes.LOGIN_SUCCESS: return loginSuccess(state,action);
        case actionTypes.USER_ROLE: return userRole(state,action);
        case actionTypes.LOGOUT_SUCCESS: return logoutSuccess(state);
        default: return state;
    }
}
export default reducer;