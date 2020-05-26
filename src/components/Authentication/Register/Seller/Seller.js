import React, { Component } from "react";
import classes from "./Seller.module.css";
import { NavLink } from "react-router-dom";

class Seller extends Component {
  state = {
    email: null,
    firstName: null,
    middleName:null,
    lastName: null,
    password: null,
    confirmPassword:null,
    gst:null,
    companyContact: null,
    companyName: null,
    addresses: [
        {
            city: null,
            state: null,
            country: null,
            addressLine: null,
            zipCode: null,
            label: null
        }
    ]
  };

  render() {
    return (
      <div className={classes.Seller}>
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
                <label htmlFor="middleName">Last Name</label>
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

              <div className={classes.companyName}>
                <label htmlFor="companyName">Company Name</label>
                <input
                  className={classes.companyName}
                  placeholder="Company Name"
                  type="text"
                  name="companyName"
                  noValidate
                />
              </div>
              <div className={classes.companyContact}>
                <label htmlFor="companyContact">Company Contact</label>
                <input
                  className={classes.companyContact}
                  placeholder="Company Contact"
                  type="text"
                  name="companyContact"
                  noValidate
                />
              </div>

              {/* ..................................... */}
              <div className={classes.city}>
                <label htmlFor="city">City</label>
                <input
                  className={classes.city}
                  placeholder="City"
                  type="text"
                  name="city"
                  noValidate
                />
              </div>
              <div className={classes.state}>
                <label htmlFor="state">State</label>
                <input
                  className={classes.state}
                  placeholder="State"
                  type="text"
                  name="state"
                  noValidate
                />
              </div>
              <div className={classes.country}>
                <label htmlFor="country">Country</label>
                <input
                  className={classes.country}
                  placeholder="Country"
                  type="text"
                  name="country"
                  noValidate
                />
              </div>

            {/* ..................................... */}

            <div className={classes.addressLine}>
                <label htmlFor="addressLine">Address Line</label>
                <input
                  className={classes.addressLine}
                  placeholder="Address Line"
                  type="text"
                  name="addressLine"
                  noValidate
                />
              </div>
              <div className={classes.zipCode}>
                <label htmlFor="zipCode">Zip Code</label>
                <input
                  className={classes.zipCode}
                  placeholder="Zip Code"
                  type="text"
                  name="zipCode"
                  noValidate
                />
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
