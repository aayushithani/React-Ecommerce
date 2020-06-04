import React, { Component } from "react";
import classes from "./UserPassword.module.css";
import { Validations } from "../../../Validations/Validations";
import axios from "axios";
import { connect } from "react-redux";

class UserPassword extends Component {
  state = {
    user: {
      password: "",
      confirmPassword: "",
    },
    validations: {
      password: "",
      confirmPassword: "",
    },
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

  submitForm = (e) => {
    const token = this.props.token;
    e.preventDefault();
    axios
      .patch(
        `/customers/password/change`,
        {
          password: this.state.user.password,
          confirmPassword: this.state.user.confirmPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        alert("Your Password has been Changed Successfully!");
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
    const { password, confirmPassword } = this.state.user;
    return (
      <div className={classes.UserPassword}>
        <form onSubmit={this.submitForm}>
          <h1>Update Password</h1>
          <div className={classes.password}>
            <label htmlFor="password">Password</label>
            <input
              className={classes.password}
              placeholder="Password"
              type="password"
              id="password"
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
          <div className={classes.createAccount}>
            <button type="submit">Submit</button>
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

export default connect(mapStateToProps, null)(UserPassword);
