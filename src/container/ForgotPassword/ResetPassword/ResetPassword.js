import React, { Component } from "react";
import classes from "./ResetPassword.module.css";
import axios from "axios";
import { withRouter } from "react-router";
import queryString from "query-string";

class ResetPassword extends Component {
  state = {
    password: "",
    confirmPassword: "",
    token: "",
    error: "",
    validation: {
      password: "",
      confirmPassword: "",
    },
  };

  componentDidMount() {
    const values = queryString.parse(this.props.location.search);
    this.setState({
      token: values.token,
    });
  }

  submitForm = (e) => {
    e.preventDefault();
    axios
      .patch(`/users/password/reset?token=${this.state.token}`, {
        password: this.state.password,
        confirmPassword: this.state.confirmPassword,
      })
      .then((response) => {
        alert("Reset Password Mail Has Been Sent Successfully!");
      })
      .catch((error) => {
        if (error.response.data.message) {
          this.setState({
            error: error.response.data.message,
          });
        }
      });
  };

  onChangeHandler = (event) => {
    const { name, value } = event.target;
    let errors = this.state.validation;
    const validPasswordRegex = RegExp(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d.*)(?=.*\W.*)[a-zA-Z0-9\S]{8,15}$/i
    );
    switch (name) {
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
      default:
        break;
    }

    this.setState({
      validations: errors,
    });
    this.setState({
      [event.target.name]: event.target.value,
    });

    // console.log(this.state.password);
    // console.log(this.state.validation);
  };

  render() {
    const { password } = this.state.password;
    const { confirmPassword } = this.state.confirmPassword;
    return (
      <div className={classes.ResetPassword}>
        <div className={classes.wrapper}>
          <div className={classes.formWrapper}>
            <h1>Reset Password</h1>
            <form onSubmit={this.submitForm}>
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
                {this.state.validation.password && (
                  <label htmlFor="Error" style={{ color: "red" }}>
                    {this.state.validation.password}
                  </label>
                )}
              </div>
              <div className={classes.confirmPassword}>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  className={classes.confirmPassword}
                  placeholder="Confirm Password"
                  type="confirmPassword"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={this.onChangeHandler}
                />
                {this.state.validation.confirmPassword && (
                  <label htmlFor="Error" style={{ color: "red" }}>
                    {this.state.validation.confirmPassword}
                  </label>
                )}
              </div>
              {this.state.error && (
                <label htmlFor="Error" style={{ color: "red" }}>
                  {this.state.error}
                </label>
              )}
              <div className={classes.createAccount}>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}



export default (withRouter(ResetPassword));
