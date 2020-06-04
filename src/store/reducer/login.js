import * as actionTypes from '../actions/actionTypes';

const initialState={
    token : null,
    isAuthenticated:false,
    authority:null
}

const loginSuccess = (state, action) => {
    console.log("In Reducer",action);
    console.log("In Reducer",action.access_token);
    return {
      ...state,
      token:action.access_token,
      isAuthenticated:true
    }
}

const userRole = (state, action) => {
    console.log("In Reducer",action);
    console.log("In Reducer",action.authority);
    return {
      ...state,
      authority:action.authority,    
    }
}

const reducer = (state = initialState,action) => {
    console.log("state: ==",state)
    switch(action.type){
        case actionTypes.LOGIN_SUCCESS: return loginSuccess(state,action);
        case actionTypes.USER_ROLE: return userRole(state,action)
        default: return state;
    }
}
export default reducer;