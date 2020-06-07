import React, { Component } from "react";
import classes from "./Customer.module.css";
import { NavLink } from "react-router-dom";
import {Validations} from '../../../Validations/Validations';
import axios from "axios";

class Customer extends Component {
  state = {
    user: {
      firstName: "",
      lastName: "",
      middleName: "",
      email: "",
      password: "",
      confirmPassword: "",
      contact: "",
    },
    validations: {
      firstName: "",
      lastName: "",
      middleName: "",
      email: "",
      password: "",
      confirmPassword: "",
      contact: "",
    },
    error: null,
  };

  onChangeHandler = (event) => {
    let validations = this.state.validations;
    Validations(event,validations);
 
    const updatedUser = {
      ...this.state.user,
      [event.target.name]: event.target.value,
    };
    this.setState({
      validations: validations,
      user: updatedUser,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    if(this.state.user.password !== this.state.user.confirmPassword) {
      return this.setState({
        ...this.state.validations,
        confirmPassword: 'Password And Confirm Password Do Not Match!'
      })
    }
    console.log(this.state.user);
    axios
      .post("/users/customers-registration", this.state.user)
      .then((response) => {
        console.log(response);
        console.log(response.data);
        alert("Registered Successfully! The Activation Link Has Been Sent to your EmailID.");
      }).catch((error)  => {
        if (error.response.data.message) {
          this.setState({
            error : error.response.data.message
          })
        }
      });
  };

  render() {
    const {
      firstName,
      lastName,
      middleName,
      email,
      password,
      confirmPassword,
      contact,
    } = this.state.user;
    return (
      <div className={classes.Customer}>
        <div className={classes.wrapper}>
          <div className={classes.formWrapper}>
            <h1>Create Account</h1>
            <form onSubmit={this.submitHandler}>
              <div className={classes.firstName}>
                <label htmlFor="firstName">First Name</label>
                <input
                  className={classes.firstName}
                  placeholder="First Name"
                  type="text"
                  name="firstName"
                  value={firstName}
                  onChange={this.onChangeHandler}
                />
                {(this.state.validations.firstName) && (
                  <label htmlFor="Error" style={{ color: "red" }}>
                    {this.state.validations.firstName}
                  </label>
                )}
              </div>
              <div className={classes.middleName}>
                <label htmlFor="middleName">Middle Name</label>
                <input
                  className={classes.middleName}
                  placeholder="Middle Name"
                  type="text"
                  name="middleName"
                  value={middleName}
                  onChange={this.onChangeHandler}
                />
              </div>
              <div className={classes.lastName}>
                <label htmlFor="lastName">Last Name</label>
                <input
                  className={classes.lastName}
                  placeholder="Last Name"
                  type="text"
                  name="lastName"
                  value={lastName}
                  onChange={this.onChangeHandler}
                />
                {this.state.validations.lastName && (
                  <label htmlFor="Error" style={{ color: "red" }}>
                    {this.state.validations.lastName}
                  </label>
                )}
              </div>
              <div className={classes.email}>
                <label htmlFor="email">Email</label>
                <input
                  className={classes.email}
                  placeholder="Email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={this.onChangeHandler}
                />
                {this.state.validations.email && (
                  <label htmlFor="Error" style={{ color: "red" }}>
                    {this.state.validations.email}
                  </label>
                )}
              </div>
              <div className={classes.password}>
                <label htmlFor="password">Password</label>
                <input
                  className={classes.password}
                  placeholder="Password"
                  type="password"
                  id='password'
                  name="password"
                  value={password}
                  onChange={this.onChangeHandler}
                />
                {this.state.validations.password && (
                  <label htmlFor="Error" style={{ color: "red" }}>
                    {this.state.validations.password}
                  </label>
                )}
              </div>
              <div className={classes.confirmPassword}>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  className={classes.confirmPassword}
                  placeholder="Confirm Password"
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={this.onChangeHandler}
                />
                {this.state.validations.confirmPassword && (
                  <label htmlFor="Error" style={{ color: "red" }}>
                    {this.state.validations.confirmPassword}
                  </label>
                )}
              </div>
              <div className={classes.contact}>
                <label htmlFor="contact">Contact</label>
                <input
                  className={classes.contact}
                  placeholder="Contact"
                  type="contact"
                  name="contact"
                  value={contact}
                  onChange={this.onChangeHandler}
                />
                {this.state.validations.contact && (
                  <label htmlFor="Error" style={{ color: "red" }}>
                    {this.state.validations.contact}
                  </label>
                )}
              </div>
              {this.state.error && (
                  <label htmlFor="Error" style={{ color: "red" }}>
                    {this.state.error}
                  </label>
                )}
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
