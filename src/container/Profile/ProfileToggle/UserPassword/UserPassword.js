import React, { Component } from "react";
import classes from './UserPassword.module.css'

class UserPassword extends Component {
  render() {
    return (
      <div className={classes.UserPassword}>
        <form onSubmit={this.submitForm}>
          <h1>Change Password!</h1>
          <div className={classes.password}>
            <label htmlFor="password">Password</label>
            <input
              className={classes.password}
              placeholder="Password"
              type="password"
              name="password"
              required
              id="password"
              onChange={this.onChangeHandler}
            />
          </div>
          <div className={classes.confirmPassword}>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              className={classes.confirmPassword}
              placeholder="Confirm Password"
              type="confirmPassword"
              name="confirmPassword"
              required
              id="confirmPassword"
              onChange={this.onChangeHandler}
            />
          </div>
          <div className={classes.createAccount}>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default UserPassword;
