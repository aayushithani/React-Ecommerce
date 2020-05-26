import React, { Component } from "react";
import classes from "./Customer.module.css";
import { NavLink } from "react-router-dom";

class Customer extends Component {
  state = {
    email: null,
    firstName: null,
    middleName:null,
    lastName: null,
    password: null,
    confirmPassword:null,
    contact:null
  };

  render() {
    return (
      <div className={classes.Customer}>
        <div className={classes.wrapper}>
          <div className={classes.formWrapper}>
            <h1>Create Account</h1>
            <form onSubmit={this.handleSubmit} noValidate>
              <div className={classes.firstName}>
                <label htmlFor="firstName">First Name</label>
                <input
                  className={classes.firstName}
                  placeholder="First Name"
                  type="text"
                  name="firstName"
                  noValidate
                />
              </div>
              <div className={classes.lastName}>
                <label htmlFor="lastName">Last Name</label>
                <input
                  className={classes.lastName}
                  placeholder="Last Name"
                  type="text"
                  name="lastName"
                  noValidate
                />
              </div>
              <div className={classes.middleName}>
                <label htmlFor="middleName">Middle Name</label>
                <input
                  className={classes.middleName}
                  placeholder="Middle Name"
                  type="text"
                  name="middleName"
                  noValidate
                />
              </div>
              <div className={classes.email}>
                <label htmlFor="email">Email</label>
                <input
                  className={classes.email}
                  placeholder="Email"
                  type="email"
                  name="email"
                  noValidate
                />
              </div>
              <div className={classes.password}>
                <label htmlFor="password">Password</label>
                <input
                  className={classes.password}
                  placeholder="Password"
                  type="password"
                  name="password"
                  noValidate
                />
              </div>
              <div className={classes.confirmPassword}>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  className={classes.confirmPassword}
                  placeholder="Confirm Password"
                  type="confirmPassword"
                  name="confirmPassword"
                  noValidate
                />
              </div>
              <div className={classes.contact}>
                <label htmlFor="contact">Contact</label>
                <input
                  className={classes.contact}
                  placeholder="Contact"
                  type="contact"
                  name="contact"
                  noValidate
                />
              </div>
              <div className={classes.createAccount}>
                <button type="submit">Create Account</button>
                <NavLink to="/login">
                  <small>Already Have an Account?</small>
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Customer;
