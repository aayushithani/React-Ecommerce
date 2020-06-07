import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import classes from "../../CustomerProfile/CustomerAddressList/UserAddressList.module.css";
import { Validations } from "../../../../Validations/Validations";
import axios from "axios";
import { connect } from "react-redux";

class Address extends Component {
  state = {
    address: {
      city: "",
      state: "",
      country: "",
      addressLine: "",
      zipCode: "",
      label: "Office",
    },
    errors: {
      city: null,
      state: null,
      country: null,
      address_line: null,
      zip_code: null,
      label: null,
    },
    edit: true,
    update: false,
    disabled: true,
    error:null
  };

  componentDidMount() {
    const token = this.props.token;
    console.log(token);
    axios
      .get(`/sellers/address`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        console.log(response.data.data);
        this.setState({
          ...this.state.address,
          address: response.data.data,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
    console.log(this.state.address);
  }


  onChangeHandler = (event) => {
    let errors = this.state.errors;
    Validations(event, errors);
    const updatedAddress = {
      ...this.state.address,
      [event.target.name]: event.target.value,
    };
    this.setState({
      errors: errors,
      address: updatedAddress,
    });
  };


  onEditHandler = (e) => {
    this.setState({
      ...this.state,
      edit: false,
      update: true,
      disabled: !this.state.disabled,
    });
  };


  onUpdateHandler = () => {
    const RequestBody = {
      city: this.state.address.city,
      state: this.state.address.state,
      country: this.state.address.country,
      addressLine: this.state.address.addressLine,
      zipCode: this.state.address.zipCode,
      label: this.state.address.label,
    };
    axios({
      method: "patch",
      url: `/sellers/addresses`,
      data: RequestBody,
      headers: {
        Authorization: `bearer ${this.props.token}`,
      },
    })
      .then((response) => {
        alert("Address Changed Successfully!");
      })
      .catch((error) => {
        console.log(error.response.data.details);
        if (error.response.data.message) {
          this.setState({
            error: error.response.data.details,
          });
        }
      });
      this.setState({
        ...this.state,
        edit: true,
        update: false,
        disabled: !this.state.disabled,
      });
  };

  render() {
    console.log(this.state.address);
    return (
      <div className={classes.Address}>
        <Container className={classes.Container}>
          <Row className={classes.Row}>
            <Col sm={8} className={classes.Col}>
              <form onSubmit={this.handleSubmit} noValidate>
              <h1>User Address</h1>
                <div className={classes.addressLine}>
                  <label htmlFor="addressLine">Address Line</label>
                  <input
                    className={classes.addressLine}
                    placeholder="Address Line"
                    type="text"
                    name="addressLine"
                    value={this.state.address.addressLine}
                    onChange={this.onChangeHandler}
                    disabled={this.state.disabled ? true : null}
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
                    defaultValue={this.state.address.zipCode}
                    onChange={this.onChangeHandler}
                    disabled={this.state.disabled ? true : null}
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
                    defaultValue={this.state.address.city}
                    onChange={this.onChangeHandler}
                    disabled={this.state.disabled ? true : null}
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
                    defaultValue={this.state.address.state}
                    onChange={this.onChangeHandler}
                    disabled={this.state.disabled ? true : null}
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
                    defaultValue={this.state.address.country}
                    onChange={this.onChangeHandler}
                    disabled={this.state.disabled ? true : null}
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
                    defaultValue={this.state.address.label}
                    onChange={this.onChangeHandler}
                    disabled={this.state.disabled ? true : null}
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
            </Col>
            <Col sm={4} className={classes.Col}>
              {this.state.disabled ? (
                <button onClick={() => this.onEditHandler()}>Edit</button>
              ) : null}
              {this.state.disabled ? null : (
                <button type="submit" onClick={() => this.onUpdateHandler()}>
                  Update
                </button>
              )}
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

export default connect(mapStateToProps, null)(Address);
