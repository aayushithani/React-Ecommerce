import React, { Component } from "react";
import classes from "./Seller.module.css";
import { NavLink } from "react-router-dom";
import { responseMapper } from "./helper";
import {Validations} from '../../../Validations/Validations';
import axios from "axios";

class Seller extends Component {
  state = {
    user: {
    email: "",
    firstName: "",
    middleName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    gst: "",
    companyContact: "",
    companyName: "",
    addresses: [
        {
          city: "",
            state: "",
            country: "",
            addressLine: "",
            zipCode: "",
            label: "Home"
        }
    ]},
    errors: {
      email: null,
      firstName: null,
      middleName: null,
      lastName: null,
      password: null,
      confirmPassword: null,
      gst: null,
      companyContact: null,
      companyName: null,
      city: null,
      state: null,
      country: null,
      addressLine: null,
      zipCode: null,
      label: null,
    },
    error:null
  };

  onChangeHandler = (event) => {
    let errors = this.state.errors;
    Validations(event,errors);
    this.setState ({
      ...this.state,
      user: {
        ...this.state.user,
        [event.target.name]: event.target.value,
        addresses : {
          ...this.state.user.addresses,
        }
      }
    });
    console.log(this.state.user);
  };

  onChangeHandlerAddress = (event) => {
    let errors = this.state.errors;
    Validations(event,errors);
    this.setState ({
      ...this.state,
      user: {
        ...this.state.user,
        addresses : [{
          ...this.state.user.addresses[0],
          [event.target.name]: event.target.value,
        }]
      }
    });
    console.log(this.state.user);
  };

  onSubmitHandler = (e) => {

    e.preventDefault();
    if (this.state.user.password !== this.state.user.confirmPassword) {
      return this.setState({
        ...this.state.errors,
        confirmPassword: "Password And Confirm Password Do Not Match!",
      });
    }
    const payload = responseMapper(this.state.user);
    console.log(payload);
     axios
      .post("/users/sellers-registration", this.state.user)
      .then((response) => {
        console.log(response);
        console.log(response.data);
        alert("Registered Successfully! Waiting for Admin's Approval.");
      }).catch((error)  => {
        console.log(error.response);
        console.log(error.response.data.details);
        if (error.response.data.message) {
          this.setState({
            error : error.response.data.details
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
      gst,
      companyContact,
      companyName,
      city,
      state,
      country,
      addressLine,
      zipCode,
    } = this.state.user;

    return (
      <div className={classes.Seller}>
        <div className={classes.wrapper}>
          <div className={classes.formWrapper}>
            <h1>Create Account</h1>
            <form onSubmit={this.onSubmitHandler}>
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
                {this.state.errors.firstName && (
                  <label htmlFor="Error" style={{ color: "red" }}>
                    {this.state.errors.firstName}
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
                {this.state.errors.lastName && (
                  <label htmlFor="Error" style={{ color: "red" }}>
                    {this.state.errors.lastName}
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
                {this.state.errors.email && (
                  <label htmlFor="Error" style={{ color: "red" }}>
                    {this.state.errors.email}
                  </label>
                )}
              </div>
              <div className={classes.password}>
                <label htmlFor="password">Password</label>
                <input
                  className={classes.password}
                  placeholder="Password"
                  type="password"
                  name="password"
                  value={password}
                  onChange={this.onChangeHandler}
                />
                {this.state.errors.password && (
                  <label htmlFor="Error" style={{ color: "red" }}>
                    {this.state.errors.password}
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
                {this.state.errors.confirmPassword && (
                  <label htmlFor="Error" style={{ color: "red" }}>
                    {this.state.errors.confirmPassword}
                  </label>
                )}
              </div>
              <div className={classes.companyName}>
                <label htmlFor="companyName">Company Name</label>
                <input
                  className={classes.companyName}
                  placeholder="Company Name"
                  type="text"
                  name="companyName"
                  value={companyName}
                  onChange={this.onChangeHandler}
                />
                {this.state.errors.companyName && (
                  <label htmlFor="Error" style={{ color: "red" }}>
                    {this.state.errors.companyName}
                  </label>
                )}
              </div>
              <div className={classes.companyContact}>
                <label htmlFor="companyContact">Company Contact</label>
                <input
                  className={classes.companyContact}
                  placeholder="Company Contact"
                  type="text"
                  name="companyContact"
                  value={companyContact}
                  onChange={this.onChangeHandler}
                />
                {this.state.errors.companyContact && (
                  <label htmlFor="Error" style={{ color: "red" }}>
                    {this.state.errors.companyContact}
                  </label>
                )}
              </div>
              <div className={classes.gst}>
                <label htmlFor="gst">GST</label>
                <input
                  className={classes.gst}
                  placeholder="GST"
                  type="text"
                  name="gst"
                  value={gst}
                  onChange={this.onChangeHandler}
                />
                {this.state.errors.gst && (
                  <label htmlFor="Error" style={{ color: "red" }}>
                    {this.state.errors.gst}
                  </label>
                )}
              </div>
              <div className={classes.city}>
                <label htmlFor="city">City</label>
                <input
                  className={classes.city}
                  placeholder="City"
                  type="text"
                  name="city"
                  value={city}
                  onChange={this.onChangeHandlerAddress}
                />
                {this.state.errors.city && (
                  <label htmlFor="Error" style={{ color: "red" }}>
                    {this.state.errors.city}
                  </label>
                )}
              </div>
              <div className={classes.state}>
                <label htmlFor="state">State</label>
                <input
                  className={classes.state}
                  placeholder="State"
                  type="text"
                  name="state"
                  value={state}
                  onChange={this.onChangeHandlerAddress}
                />
                {this.state.errors.state && (
                  <label htmlFor="Error" style={{ color: "red" }}>
                    {this.state.errors.state}
                  </label>
                )}
              </div>
              <div className={classes.country}>
                <label htmlFor="country">Country</label>
                <input
                  className={classes.country}
                  placeholder="Country"
                  type="text"
                  name="country"
                  value={country}
                  onChange={this.onChangeHandlerAddress}
                />
                {this.state.errors.country && (
                  <label htmlFor="Error" style={{ color: "red" }}>
                    {this.state.errors.country}
                  </label>
                )}
              </div>
              <div className={classes.addressLine}>
                <label htmlFor="addressLine">Address Line</label>
                <input
                  className={classes.addressLine}
                  placeholder="Address Line"
                  type="text"
                  name="addressLine"
                  value={addressLine}
                  onChange={this.onChangeHandlerAddress}
                />
                {this.state.errors.addressLine && (
                  <label htmlFor="Error" style={{ color: "red" }}>
                    {this.state.errors.addressLine}
                  </label>
                )}
              </div>
              <div className={classes.zipCode}>
                <label htmlFor="zipCode">Zip Code</label>
                <input
                  className={classes.zipCode}
                  placeholder="Zip Code"
                  type="text"
                  name="zipCode"
                  value={zipCode}
                  onChange={this.onChangeHandlerAddress}
                />
                {this.state.errors.zipCode && (
                  <label htmlFor="Error" style={{ color: "red" }}>
                    {this.state.errors.zipCode}
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

export default Seller;
