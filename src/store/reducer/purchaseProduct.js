import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState={
    token : null,
    orderData: []
}

const purchaseProduct = (state, action) => {
    console.log("In Reducer:",action);
    console.log("In Reducer:",action.access_token);
    console.log("In Reducer:",action.orderData);
    const newOrder = updateObject( action.orderData);
    return updateObject(state,{
      orderData: state.orderData.concat(newOrder)
    } );
}

const reducer = (state = initialState,action) => {
    console.log(state);
    switch(action.type){
        case actionTypes.ADD_PRODUCT: return purchaseProduct(state,action);
        default: return state;
    }
}
export default reducer;