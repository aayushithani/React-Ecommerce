import React, { Component } from "react";
import classes from "./ForgotPassword.module.css";
import axios from "axios";

class ForgotPassword extends Component {
  state = {
    email: "",
    error:""
  };

  submitForm = (e) => {
    console.log(this.state.email);
    e.preventDefault();
    axios
      .post("/users/password/forgot", {
        email: this.state.email,
      })
      .then((response) => {
        console.log(response.data);
        alert("Reset Password Mail Has Been Sent Successfully!");
      }).catch((error)  => {
        console.log(error.response.data.message);
        if (error.response.data.message) {
          this.setState({
            error : error.response.data.message
          })
        }
      });
  };

  onChangeHandler = (event) => {
    console.log(event.target.value);
    this.setState({ email: event.target.value });
  };

  render() {
    return (
      <div className={classes.ForgotPassword}>
        <div className={classes.wrapper}>
          <div className={classes.formWrapper}>
            <h1>Forgot Password</h1>
            <form onSubmit={this.submitForm} noValidate>
              <div className={classes.email}>
                <label htmlFor="email">Email</label>
                <input
                  placeholder="Email"
                  type="email"
                  name="email"
                  value={this.state.email}
                  noValidate
                  onChange={this.onChangeHandler}
                />
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


export default ForgotPassword;
