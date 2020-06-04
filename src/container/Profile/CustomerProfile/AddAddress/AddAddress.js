import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import classes from "./AddAddress.module.css";
import axios from "axios";
import { Validations } from "../../../../Validations/Validations";
import { connect } from "react-redux";

class AddAddress extends Component {
  state = {
    city: "",
    state: "",
    country: "",
    addressLine: "",
    zipCode: "",
    label: "",
    errors: {
      city: null,
      state: null,
      country: null,
      addressLine: null,
      zipCode: null,
      label: null,
    },
    error: [],
  };

  onChangeHandler = (event) => {
    let errors = this.state.errors;
    Validations(event, errors);
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
      errors: errors,
    });
    console.log("ADD ADDRESS", this.state);
  };

  onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("INSIDE SUBMIT");
    console.log("STATE", this.state);
    axios({
      method: "post",
      url: `/customers/addresses`,
      data: {
        city: this.state.city,
        state: this.state.state,
        country: this.state.country,
        addressLine: this.state.addressLine,
        zipCode: this.state.zipCode,
        label: this.state.label,
      },
      headers: {
        Authorization: `Bearer ${this.props.token}`,
      },
    })
      .then((response) => {
        alert("The Address Has Been Added Successfully!");
      })
      .catch((error) => {
        if (error.response.data.message) {
          this.setState({
            error: error.response.data.details,
          });
        }
      });
  };

  render() {
    const { city, state, country, addressLine, zipCode, label } = this.state;
    return (
      <div className={classes.Address}>
        <Container className={classes.Container}>
          <Row className={classes.Row}>
            <Col sm={12} className={classes.Col}>
              <form onSubmit={this.onSubmitHandler}>
              <h1>Add Address</h1>
                <div className={classes.addressLine}>
                  <label htmlFor="addressLine">Address Line</label>
                  <input
                    className={classes.addressLine}
                    placeholder="Address Line"
                    type="text"
                    name="addressLine"
                    value={addressLine}
                    onChange={this.onChangeHandler}
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
                    onChange={this.onChangeHandler}
                  />
                  {this.state.errors.zipCode && (
                    <label htmlFor="Error" style={{ color: "red" }}>
                      {this.state.errors.zipCode}
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
                    onChange={this.onChangeHandler}
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
                    onChange={this.onChangeHandler}
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
                    onChange={this.onChangeHandler}
                  />
                  {this.state.errors.country && (
                    <label htmlFor="Error" style={{ color: "red" }}>
                      {this.state.errors.country}
                    </label>
                  )}
                </div>
                <div className={classes.label}>
                  <label htmlFor="label">Label</label>
                  <input
                    className={classes.country}
                    placeholder="label"
                    type="text"
                    name="label"
                    value={label}
                    onChange={this.onChangeHandler}
                  />
                  {this.state.errors.label && (
                    <label htmlFor="Error" style={{ color: "red" }}>
                      {this.state.errors.label}
                    </label>
                  )}
                </div>
              </form>
              {this.state.error && (
                <label htmlFor="Error" style={{ color: "red" }}>
                  {this.state.error}
                </label>
              )}
              <div className={classes.createAccount}>
                <button type="submit" onClick={this.onSubmitHandler}>
                  Add Address
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.login.token,
  };
};

export default connect(mapStateToProps, null)(AddAddress);
