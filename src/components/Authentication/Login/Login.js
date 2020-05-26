import React, { Component } from "react";
import classes from "./Login.module.css";
import { NavLink } from "react-router-dom";

class Login extends Component {
  state = {
    email: null,
    password: null,
  };

  render() {
    return (
      <div className={classes.Login}>
        <div className={classes.wrapper}>
          <div className={classes.formWrapper}>
            <h1>Login</h1>
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
              <NavLink to="/forgotPassword" className={classes.NavLink}>
                  Forgot Password ?
              </NavLink>
              <div className={classes.createAccount}>
                <button type="submit">Submit</button>
                <NavLink to="/signup" className={classes.AccountNavLink}>
                  Don't Have An Account?
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
