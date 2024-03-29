import React, { Component } from "react";
import classes from "./Login.module.css";
import { NavLink, Redirect } from "react-router-dom";
import axios from "axios";
import * as actions from '../../../store/actions/index';
import { connect } from 'react-redux';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: "",
        password: "",
      },
      error:null
    };
  }

  onChangeHandler = (e) => {
    const loggedInUser = {
      ...this.state.user,
      [e.target.name]: e.target.value,
    };
    this.setState({
      user: loggedInUser,
    });
  };


  submitForm = (e) => {
    e.preventDefault();
    var bodyFormData = new FormData();
    bodyFormData.set("grant_type", "password");
    bodyFormData.append("client_id", "live-test");
    bodyFormData.append("username", this.state.user.email);
    bodyFormData.append("password", this.state.user.password);
    bodyFormData.append("client_secret", "abcde");

    axios.post("/oauth/token", bodyFormData)
    .then((response) => {
      const token = response.data.access_token;
      this.props.onLogin(token);
      return (axios.post("/users/role", { email: this.state.user.email})
      .then((response) => {
        console.log(response.data.data);
        this.props.onUserRole(response.data.data);
      })
    )}).catch((error)  => {
      if (error.response) {
        this.setState({
          error : "Incorrect Email or Password!"
        })
      }
    });
  };

  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/" />;
    }
    return (
      <div className={classes.Login}>
        <div className={classes.wrapper}>
          <div className={classes.formWrapper}>
            <h1>Login</h1>
            <form onSubmit={this.submitForm}>
              <div className={classes.email}>
                <label htmlFor="email">Email</label>
                <input
                  className={classes.email}
                  placeholder="Email"
                  type="email"
                  name="email"
                  value={this.state.email}
                  required
                  id="email"
                  autoFocus
                  onChange={this.onChangeHandler}
                />
              </div>
              <div className={classes.password}>
                <label htmlFor="password">Password</label>
                <input
                  className={classes.password}
                  placeholder="Password"
                  type="password"
                  name="password"
                  value={this.state.password}
                  required
                  id="password"
                  onChange={this.onChangeHandler}
                />
              </div>
              
              {this.state.error && <label htmlFor="Error" className={classes.Error}>
                {this.state.error}
              </label>}

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

const mapDispatchToProps = dispatch => {
  return{
      onLogin: (access_token) => dispatch(actions.loginSuccess(access_token)),
      onUserRole: (authority) => dispatch(actions.userRole(authority))
  }
}

export default connect(null,mapDispatchToProps)(Login);
