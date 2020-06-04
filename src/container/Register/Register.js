import React, { Component } from "react";
import classes from './Register.module.css'
import { NavLink } from "react-router-dom";

class Register extends Component {
  render() {
    return (
      <div className={classes.Register}>
        <div className={classes.alert}>
          <h2>Hey! Select The Account Type...</h2>
        </div>
        <div className={classes.container}>
          <h2>Please Select:</h2>

          <ul>
            <NavLink to="/customerRegister">
              <li>
                <input type="radio" id="f-option" name="selector" />
                <label htmlFor="f-option">Customer</label>
                <div className={classes.check}></div>
              </li>
            </NavLink>
            <NavLink to="/sellerRegister">
              <li>
                <input type="radio" id="s-option" name="selector" />
                <label htmlFor="s-option">Seller</label>
                <div className={classes.check}>
                  <div className={classes.inside}></div>
                </div>
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
    );
  }
}

export default Register;
