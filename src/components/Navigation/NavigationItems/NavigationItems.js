import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavigationItems.module.css";

const Navigation = (props) => {
  return (
    <nav>
      {!props.isAuthenticated ? (
        <ul className={classes.NavigationItems}>
          <li className={classes.NavigationItem}>
            <NavLink to="/homePage">Home</NavLink>
          </li>
          <li className={classes.NavigationItem}>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li className={classes.NavigationItem}>
            <NavLink to="/payment">payment</NavLink>
          </li>
        </ul>
      ) : null}

      {props.isAuthenticated ? (
        <ul className={classes.NavigationItems}>
          <li className={classes.NavigationItem}>
            <NavLink to="/homePage">Home</NavLink>
          </li>
          <li className={classes.NavigationItem}>
            <NavLink to="/cart">Cart</NavLink>
          </li>
          <li className={classes.NavigationItem}>
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li className={classes.NavigationItem}>
            <NavLink to="/logout">Logout</NavLink>
          </li>
        </ul>
      ) : null}
    </nav>
  );
};

export default Navigation;
