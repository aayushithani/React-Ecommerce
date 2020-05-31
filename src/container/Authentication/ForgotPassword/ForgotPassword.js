import React, { Component } from "react";
import classes from "./ForgotPassword.module.css";

class ForgotPassword extends Component {
  state = {
    email: null,
    password: null,
  };

  render() {
    return (
      <div className={classes.ForgotPassword}>
        <div className={classes.wrapper}>
          <div className={classes.formWrapper}>
            <h1>Forgot Password</h1>
            <form onSubmit={this.handleSubmit} noValidate>
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
