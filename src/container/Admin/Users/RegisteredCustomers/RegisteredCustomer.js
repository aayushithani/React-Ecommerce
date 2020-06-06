import React, { Component } from "react";
import classes from '../Registered.module.css'
import { Container, Row, Col, Button } from "react-bootstrap";
import { connect } from "react-redux";
import axios from "axios";

class RegisteredCustomer extends Component {
  state = {
    ...this.props.data,
    error: null,
  };

  onChangeHandler = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  };

  onDeactivateHandler = () => {
    axios({
      method: "patch",
      url: `/admin/customers/deactivate/${this.state.id}`,
      data: {
        isActive: false,
      },
      headers: {
        Authorization: `bearer ${this.props.token}`,
      },
    })
      .then((response) => {
        this.setState({
          ...this.state,
          disabled: true,
        });
        alert("Account De-Activated Successfully!");
      })
      .catch((error) => {
        if (error.response.data.message) {
          this.setState({
            error: error.response.data.message,
          });
        }
      });
  };

  onActivateHandler = () => {
    axios({
      method: "patch",
      url: `/admin/customers/activate/${this.state.id}`,
      data: {
        isActive: true,
      },
      headers: {
        Authorization: `bearer ${this.props.token}`,
      },
    })
      .then((response) => {
        this.setState({
          ...this.state,
          disabled: true,
        });
        alert("Account Activated Successfully!");
      })
      .catch((error) => {
        if (error.response.data.message) {
          this.setState({
            error: error.response.data.message,
          });
        }
      });
  };

  render() {
    return (
      <Container className={classes.Container}>
        <Row className={classes.Row}>
          <Col sm={9} className={classes.Col}>
            <form onSubmit={this.handleSubmit} noValidate>
              <div className={classes.email}>
                <label htmlFor="email">Email</label>
                <input
                  className={classes.email}
                  placeholder="Email"
                  type="text"
                  name="email"
                  defaultValue={this.state.email}
                  onChange={this.onChangeHandler}
                  disabled
                />
              </div>
              <div className={classes.firstName}>
                <label htmlFor="firstName">First Name</label>
                <input
                  className={classes.firstName}
                  placeholder="First Name"
                  type="text"
                  name="first_name"
                  value={this.state.first_name}
                  onChange={this.onChangeHandler}
                  disabled
                />
              </div>
              <div className={classes.middleName}>
                <label htmlFor="middleName">Middle Name</label>
                <input
                  className={classes.middleName}
                  placeholder="Middle Name"
                  type="text"
                  name="middle_name"
                  defaultValue={this.state.middle_name}
                  onChange={this.onChangeHandler}
                  disabled
                />
              </div>
              <div className={classes.lastName}>
                <label htmlFor="lastName">Last Name</label>
                <input
                  className={classes.lastName}
                  placeholder="Last Name"
                  type="text"
                  name="last_name"
                  defaultValue={this.state.last_name}
                  onChange={this.onChangeHandler}
                  disabled
                />
              </div>
              <div className={classes.contact}>
                <label htmlFor="contact">Contact</label>
                <input
                  className={classes.contact}
                  placeholder="Contact"
                  type="text"
                  name="contact"
                  defaultValue={this.state.contact}
                  onChange={this.onChangeHandler}
                  disabled
                />
              </div>
              <div className={classes.IsActive}>
                <label htmlFor="is_active">Is Active</label>
                <input
                  className={classes.country}
                  placeholder="Is Active"
                  type="text"
                  name="is_active"
                  defaultValue={this.state.is_active}
                  onChange={this.onChangeHandler}
                  disabled
                />
              </div>
            </form>
            {this.state.error && (
              <label htmlFor="Error" style={{ color: "red" }}>
                {this.state.error}
              </label>
            )}
          </Col>
          <Col sm={3} className={classes.Col}>
            {this.state.is_active ? (
              <Button
                className={classes.DeactivateButton}
                onClick={() => this.onDeactivateHandler()}
              >
                Deactivate
              </Button>
            ) : (
              <Button
                className={classes.ActivateButton}
                onClick={() => this.onActivateHandler()}
              >
                Activate
              </Button>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.login.token,
  };
};

export default connect(mapStateToProps, null)(RegisteredCustomer);
