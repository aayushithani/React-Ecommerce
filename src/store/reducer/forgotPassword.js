import * as actionTypes from '../actions/actionTypes';

const initialState={
    token : null,
}

const forgotPassword = (state, action) => {
    console.log("FORGOT PASSWORD In Reducer",action);
    console.log("FORGOT PASSWORD In Reducer",action.token);
    return {
      ...state,
      token:action.token,
    }
}

const reducer = (state = initialState,action) => {
    switch(action.type){
        case actionTypes.FORGOT_PASSWORD: return forgotPassword(state,action);
        default: return state;
    }
}
export default reducer;