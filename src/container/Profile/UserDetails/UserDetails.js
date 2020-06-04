import React, { Component } from "react";
import classes from "./UserDetails.module.css";
import { Validations } from "../../../Validations/Validations";
import { connect } from "react-redux";
import axios from "axios";

class UserDetails extends Component {
  state = {
    user: {
      email: "",
      firstName: "",
      middleName: "",
      lastName: "",
      contact: "",
    },
    validations: {
      firstName: null,
      middleName: null,
      lastName: null,
      contact: null,
    },
    edit: true,
    update: false,
    disabled: true,
    error: [],
  };

  componentDidMount() {
    const token = this.props.token;
    console.log(token);
    axios
      .get(`/customers/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data.data);
        const updatedUser = response.data.data;
        this.setState({
          user: updatedUser,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  onEditHandler = (e) => {
    this.setState({
      edit: false,
      update: true,
      disabled: !this.state.disabled,
    });
  };

  onUpdateHandler = (e) => {
    e.preventDefault();
    const token = this.props.token;
    axios
      .patch(
        `/customers/profile`,
        {
          firstName: this.state.user.firstName,
          middleName: this.state.user.middleName,
          lastName: this.state.user.lastName,
          contact: this.state.user.contact,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        alert("The Data Has been Updated Successfully!");
      })
      .catch((error) => {
        if (error.response.data.message) {
          this.setState({
            error: error.response.data.data,
          });
        }
      });

    this.setState({
      edit: true,
      update: false,
      disabled: !this.state.disabled,
    });
  };

  onChangeHandler = (event) => {
    let validations = this.state.validations;
    Validations(event, validations);
    const updatedUser = {
      ...this.state.user,
      [event.target.name]: event.target.value,
    };
    this.setState({
      validations: validations,
      user: updatedUser,
    });
  };

  render() {
    console.log(this.state.user);
    console.log(this.state.user.firstName);
    return (
      <div className={classes.UserDetails}>
        <form onSubmit={this.submitHandler}>
          <h1>Personal Details</h1>
          <div className={classes.firstName}>
            <label htmlFor="firstName">First Name</label>
            <input
              className={classes.firstName}
              placeholder="First Name"
              type="text"
              name="firstName"
              defaultValue={this.state.user.firstName}
              onChange={this.onChangeHandler}
              disabled={this.state.disabled ? "disabled" : ""}
            />
            {this.state.validations.firstName && (
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
              defaultValue={this.state.user.middleName}
              onChange={this.onChangeHandler}
              disabled={this.state.disabled ? "disabled" : ""}
            />
          </div>
          <div className={classes.lastName}>
            <label htmlFor="lastName">Last Name</label>
            <input
              className={classes.lastName}
              placeholder="Last Name"
              type="text"
              name="lastName"
              defaultValue={this.state.user.lastName}
              onChange={this.onChangeHandler}
              disabled={this.state.disabled ? "disabled" : ""}
            />
            {this.state.validations.lastName && (
              <label htmlFor="Error" style={{ color: "red" }}>
                {this.state.validations.lastName}
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
              defaultValue={this.state.user.contact}
              onChange={this.onChangeHandler}
              disabled={this.state.disabled ? "disabled" : ""}
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
          <div className={classes.Button}>
            {this.state.edit && (
              <button onClick={this.onEditHandler}>Edit</button>
            )}
            {this.state.update && (
              <button type="submit" onClick={this.onUpdateHandler}>
                Update
              </button>
            )}
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.login.token,
  };
};

export default connect(mapStateToProps, null)(UserDetails);
