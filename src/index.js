import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import thunk from 'redux-thunk';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import LoginReducer from './store/reducer/login';
import purchaseProductReducer from './store/reducer/purchaseProduct';
import forgotPasswordReducer from './store/reducer/forgotPassword';
// import setAuthorizationToken from "./container/Authentication/setAuthorizationToken";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  login: LoginReducer,
  purchaseProduct: purchaseProductReducer,
  forgotPassword: forgotPasswordReducer
});

const store = createStore(rootReducer,composeEnhancers(
  applyMiddleware(thunk)
));

// setAuthorizationToken(localStorage.jwtToken);

ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
