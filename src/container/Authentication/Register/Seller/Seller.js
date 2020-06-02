import React, { Component } from "react";
import classes from "./Seller.module.css";
import { NavLink } from "react-router-dom";
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
          label: "Office",
        },
      ],
    },
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
      addresses: [
        {
          city: null,
          state: null,
          country: null,
          addressLine: null,
          zipCode: null,
          label: null,
        },
      ],
    },
  };

  onChangeHandler = (event) => {
    const { name, value } = event.target;
    let errors = this.state.errors;
    const validEmailRegex = RegExp(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    );
    const validPasswordRegex = RegExp(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d.*)(?=.*\W.*)[a-zA-Z0-9\S]{8,15}$/i
    );
    const validContactRegex = RegExp(
      /^(?:\s+|)((0|(?:(\+|)91))(?:\s|-)*(?:(?:\d(?:\s|-)*\d{9})|(?:\d{2}(?:\s|-)*\d{8})|(?:\d{3}(?:\s|-)*\d{7}))|\d{10})(?:\s+|)$/i
    );
    const validGstRegex = RegExp(
      /^([0]{1}[1-9]{1}|[1-2]{1}[0-9]{1}|[3]{1}[0-7]{1})([a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}[1-9a-zA-Z]{1}[zZ]{1}[0-9a-zA-Z]{1})+$/i
    );

    switch (name) {
      case "firstName":
        errors.firstName = value.length < 2 ? "This is a required Field!" : "";
        break;
      case "lastName":
        errors.lastName = value.length < 2 ? "This is a required Field!" : "";
        break;
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
        break;
      case "password":
        errors.password = validPasswordRegex.test(value)
          ? ""
          : "Password is not valid!";
        break;
      case "confirmPassword":
        errors.confirmPassword = validPasswordRegex.test(value)
          ? ""
          : "Password and Confirm Password Should Match!";
        break;
      case "companyContact":
        errors.companyContact = validContactRegex.test(value)
          ? ""
          : "Contact No. is not valid!";
        break;
      case "gst":
        errors.gst = validGstRegex.test(value) ? "" : "GST No. is not valid!";
        break;
      case "companyName":
        errors.companyName =
          value.length < 2 ? "This is a required Field!" : "";
        break;
      case "city":
        errors.city = value.length < 2 ? "This is a required Field!" : "";
        break;

      case "state":
        errors.state = value.length < 2 ? "This is a required Field!" : "";
        break;

      case "country":
        errors.country = value.length < 2 ? "This is a required Field!" : "";
        break;

      case "addressLine":
        errors.addressLine =
          value.length < 2 ? "This is a required Field!" : "";
        break;

      case "zipCode":
        errors.zipCode = value.length < 6 ? "Zip-Code is not valid!" : "";
        break;
      default:
        break;
    }

    const updatedUser = {
      ...this.state.user,
      [event.target.name]: event.target.value,
    };
    this.setState({
      errors: errors,
      user: updatedUser,
    });
    console.log(this.state.user)
  };

  onChangeAddressHandler = (event) => {
    const { name, value } = event.target;
    let errors = this.state.errors;
    switch (name) {
      case "city":
        errors.city = value.length < 2 ? "This is a required Field!" : "";
        break;

      case "state":
        errors.state = value.length < 2 ? "This is a required Field!" : "";
        break;

      case "country":
        errors.country = value.length < 2 ? "This is a required Field!" : "";
        break;

      case "addressLine":
        errors.addressLine =
          value.length < 2 ? "This is a required Field!" : "";
        break;

      case "zipCode":
        errors.zipCode = value.length < 6 ? "Zip-Code is not valid!" : "";
        break;
      default:
        break;
    }

    const updatedAddress = {
      ...this.state.user.addresses,
      [event.target.name]: event.target.value,
    };
    this.setState({
      ...this.state.user,
      user: {
        ...this.state.user.addresses,
        addresses : updatedAddress
      }
    })
    console.log(this.state.user.addresses);
    console.log(this.state.user);
  }

  submitHandler = (e) => {
    if(this.state.user.password !== this.state.user.confirmPassword) {
      return this.setState({
        ...this.state.errors,
        confirmPassword: 'Password And Confirm Password Do Not Match!'
      })
    }
    e.preventDefault();
    console.log(this.state.user);

    axios
      .post("/users/sellers-registration", this.state.user)
      .then((response) => {
        console.log(response);
        console.log(response.data);
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
    } = this.state.user;

    const {
      city,
      state,
      country,
      addressLine,
      zipCode,
    } = this.state.user.addresses;

    return (
      <div className={classes.Seller}>
        <div className={classes.wrapper}>
          <div className={classes.formWrapper}>
            <h1>Create Account</h1>
            <form onSubmit={this.handleSubmit}>
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

              {/* ..................................... */}
              <div className={classes.city}>
                <label htmlFor="city">City</label>
                <input
                  className={classes.city}
                  placeholder="City"
                  type="text"
                  name="city"
                  value={city}
                  onChange={this.onChangeAddressHandler}
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
                  onChange={this.onChangeAddressHandler}
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
                  onChange={this.onChangeAddressHandler}
                />
                {this.state.errors.country && (
                  <label htmlFor="Error" style={{ color: "red" }}>
                    {this.state.errors.country}
                  </label>
                )}
              </div>

              {/* ..................................... */}

              <div className={classes.addressLine}>
                <label htmlFor="addressLine">Address Line</label>
                <input
                  className={classes.addressLine}
                  placeholder="Address Line"
                  type="text"
                  name="addressLine"
                  value={addressLine}
                  onChange={this.onChangeAddressHandler}
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
                  onChange={this.onChangeAddressHandler}
                />
                {this.state.errors.zipCode && (
                  <label htmlFor="Error" style={{ color: "red" }}>
                    {this.state.errors.zipCode}
                  </label>
                )}
              </div>
              {/* -------------------------------------------- */}
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
