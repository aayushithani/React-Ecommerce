import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavigationItems.module.css";
import { connect } from "react-redux";

class Navigation extends Component {
  render() {
    return (
      <nav>
        {!this.props.isAuthenticated ? (
          <ul className={classes.NavigationItems}>
            <li className={classes.NavigationItem}>
              <NavLink to="/homePage">Home</NavLink>
            </li>
            <li className={classes.NavigationItem}>
              <NavLink to="/login">Login</NavLink>
            </li>
          </ul>
        ) : null}

        {this.props.isAuthenticated &&
        this.props.authority === "ROLE_CUSTOMER" ? (
          <ul className={classes.NavigationItems}>
            <li className={classes.NavigationItem}>
              <NavLink to="/homePage">Home</NavLink>
            </li>
            <li className={classes.NavigationItem}>
              <NavLink to="/cart">Cart</NavLink>
            </li>
            <li className={classes.NavigationItem}>
              <NavLink to="/customerProfile">Profile</NavLink>
            </li>
            <li className={classes.NavigationItem}>
              <NavLink to="/logout">Logout</NavLink>
            </li>
          </ul>
        ) : null}

        {this.props.isAuthenticated &&
        this.props.authority === "ROLE_SELLER" ? (
          <ul className={classes.NavigationItems}>
            <li className={classes.NavigationItem}>
              <NavLink to="/homePage">Home</NavLink>
            </li>
            <li className={classes.NavigationItem}>
              <NavLink to="/sellerProfile">SELLER</NavLink>
            </li>
          </ul>
        ) : null}

        {this.props.isAuthenticated && this.props.authority === "ROLE_ADMIN" ? (
          <ul className={classes.NavigationItems}>
            <li className={classes.NavigationItem}>
              <NavLink to="/homePage">Home</NavLink>
            </li>
            <li className={classes.NavigationItem}>
              <NavLink to="/adminProfile">ADMIN</NavLink>
            </li>
          </ul>
        ) : null}
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.login.isAuthenticated,
    authority: state.login.authority,
  };
};

export default connect(mapStateToProps)(Navigation);
