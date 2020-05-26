import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from './components/Layout/Layout'
import "bootstrap/dist/css/bootstrap.min.css";
import Register from './components/Authentication/Register/Register';
import Login from './components/Authentication/Login/Login'
import Customer from './components/Authentication/Register/Customer/Customer'
import Seller from './components/Authentication/Register/Seller/Seller'
import ForgotPassword from './components/Authentication/ForgotPassword/ForgotPassword'
import Home from './components/HomePage/HomePage'
import ProductDetail from './components/ProductDetail/ProductDetail'
import ProductList from './components/ProductList/ProductList'
import './App.css';

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/signup" exact component={Register} />
        <Route path="/login" exact component={Login} />
        <Route path="/customerRegister" exact component={Customer} />
        <Route path="/sellerRegister" exact component={Seller} />
        <Route path="/productDetail" exact component={ProductDetail} />
        <Route path="/productList" exact component={ProductList} />
        <Route path="/forgotPassword" exact component={ForgotPassword} />
        <Route path="/" exact component={Home} />
        <Redirect to="/" />
      </Switch>
    );

    return (
      <div className="App">
        <Layout>{routes}</Layout>
      </div>
    );
  }
}

export default App;
