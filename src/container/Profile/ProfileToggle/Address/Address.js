import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import classes from "./Address.module.css";

class Address extends Component {
  state = {
    edit: true,
    update: false,
  };

  onEditHandler = (e) => {
    this.setState({
      edit: false,
      update: true,
    });
  };

  onUpdateHandler = (e) => {
    this.setState({
      edit: true,
      update: false,
    });
  };

  render() {
    return (
      <div className={classes.Address}>
        <Container>
        <h1>User Addresses!</h1>
          <Row className={classes.Row}>
            <Col sm={8} className={classes.Col}>
              <form onSubmit={this.handleSubmit} noValidate>
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
              </form>
            </Col>
            <Col sm={4} className={classes.Col}>
              {this.state.edit && (
                <button onClick={this.onEditHandler}>Edit</button>
              )}
              {this.state.update && (
                <button type="submit" onClick={this.onUpdateHandler}>
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

export default Address;
