import * as actionTypes from '../actions/actionTypes';

const initialState={
    token : null,
    isAuthenticated:false
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

const reducer = (state = initialState,action) => {
    switch(action.type){
        case actionTypes.LOGIN_SUCCESS: return loginSuccess(state,action);
        default: return state;
    }
}
export default reducer;