import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./container/Register/Register";
import Login from "./container/Authentication/Login/Login";
import Customer from "./container/Register/Customer/Customer";
import Seller from "./container/Register/Seller/Seller";
import ForgotPassword from "./container/ForgotPassword/ForgotPassword";
import Home from "./container/HomePage/HomePage";
import ProductDetail from "./container/ProductDetail/ProductDetail";
import ProductListing from "./container/ProductListing/ProductListing";
import Cart from "./container/Cart/Cart";
import AdminProfile from "./container/Admin/AdminProfile";
import SellerProfile from "./container/Profile/SellerProfile/SellerProfile";
import ResetPassword from "./container/ForgotPassword/ResetPassword/ResetPassword";
import CustomerProfile from './container/Profile/CustomerProfile/CustomerProfile';
import AccountActivation from './container/Register/Customer/AccountActivation';
import ResendActivationLink from './container/Register/Customer/ResendActivationLink';
import "./App.css";

import { connect } from "react-redux";

const App = (props) => {
  let routes = !props.isAuthenticated ? (
    <Switch>
      <Route path="/signup" exact component={Register} />
      <Route path="/login" exact component={Login} />
      <Route path="/customerRegister" exact component={Customer} />
      <Route path="/users/password/reset" exact component={ResetPassword} />
      <Route path="/sellerRegister" exact component={Seller} />
      <Route path="/users/customers/confirm-account" exact component={AccountActivation} />
      <Route path="/users/customers/re-send-activation-link" exact component={ResendActivationLink} />
      <Route
        path="/productDetail/:productVariationId"
        exact
        component={ProductDetail}
      />
      <Route
        path="/productListing/:categoryId"
        exact
        component={ProductListing}
      />
      <Route path="/forgotPassword" exact component={ForgotPassword} />
      <Route path="/" exact component={Home} />
      <Redirect to="/" />
    </Switch>
  ) : props.authority === "ROLE_CUSTOMER" ? (
    <Switch>
      <Route path="/cart" exact component={Cart} />
      <Route
        path="/productDetail/:productVariationId"
        exact
        component={ProductDetail}
      />
      <Route
        path="/productListing/:categoryId"
        exact
        component={ProductListing}
      />
      <Route path="/customerProfile" exact component={CustomerProfile} />
      <Route path="/" exact component={Home} />
      <Redirect to="/" />
    </Switch>
  ) : props.authority === "ROLE_SELLER" ? (
    <Switch>
      <Route path="/sellerProfile" exact component={SellerProfile} />
      <Route path="/" exact component={Home} />
      <Redirect to="/" />
    </Switch>
  ) : (
    <Switch>
      <Route path="/adminProfile" exact component={AdminProfile} />
      <Route path="/" exact component={Home} />
      <Redirect to="/" />
    </Switch>
  );

  return (
    <div className="App">
      <Layout>{routes}</Layout>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.login.isAuthenticated,
    authority: state.login.authority,
  };
};

export default connect(mapStateToProps)(App);
