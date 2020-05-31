import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from './components/Layout/Layout'
import "bootstrap/dist/css/bootstrap.min.css";
import Register from './container/Authentication/Register/Register';
import Login from './container/Authentication/Login/Login'
import Customer from './container/Authentication/Register/Customer/Customer'
import Seller from './container/Authentication/Register/Seller/Seller'
import ForgotPassword from './container/Authentication/ForgotPassword/ForgotPassword'
import Home from './container/HomePage/HomePage'
import ProductDetail from './container/ProductDetail/ProductDetail'
import ProductListing from './container/ProductListing/ProductListing'
import Cart from './container/Cart/Cart'
import Payment from './container/Payment/Payment'
import Profile from './container/Profile/Profile';
import './App.css';

import {connect} from 'react-redux';

const App = (props) => {
    let routes = ( 
      (!props.isAuthenticated ?
        <Switch>
        <Route path="/signup" exact component={Register} />
        <Route path="/login" exact component={Login} />
        <Route path="/customerRegister" exact component={Customer} />
        <Route path="/sellerRegister" exact component={Seller} />
        <Route path="/productDetail/:productVariationId" exact component={ProductDetail} />
        <Route path="/productListing/:categoryId" exact component={ProductListing} />
        <Route path="/forgotPassword" exact component={ForgotPassword} />
        <Route path="/payment" exact component={Payment} />
        <Route path="/" exact component={Home} />
        <Redirect to="/" />
      </Switch>
      :
      <Switch>
        <Route path="/cart" exact component={Cart} />
        <Route path="/payment" exact component={Payment} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/" exact component={Home} />
        <Redirect to="/" />
      </Switch>
      )
    );

    return (
      <div className="App">
        <Layout {...props}>
          {routes}
          </Layout>
      </div>
    );
}


const mapStateToProps = state => {
  return{
    isAuthenticated: state.isAuthenticated
  }
}

export default connect(mapStateToProps)(App);

