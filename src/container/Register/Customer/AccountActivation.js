import React, { Component } from "react";
import classes from "../../Authentication/Login/Login.module.css";
import queryString from "query-string";
import axios from "axios";
import { withRouter } from "react-router";
import { NavLink } from 'react-router-dom';

export class AccountActivation extends Component {
  state = {
    error: null,
  };

  componentDidMount() {
    const values = queryString.parse(this.props.location.search);
    axios
      .get(`/users/customers/confirm-account?token=${values.token}`)
      .then((response) => {})
      .catch((error) => {
        if (error.response.data.message) {
          console.log(error.response.data.message);
          this.setState({
            error: error.response.data.message,
          });
        }
      });
  }
  render() {
    return (
      <div className={classes.Login}>
        <div className={classes.wrapper}>
          <div className={classes.formWrapper}>
            {this.state.error ? (
              <div>
                <h1>{this.state.error}</h1>
                <NavLink
                  to="/users/customers/re-send-activation-link"
                  className={classes.NavLink} style={{marginLeft:"90px"}}
                >
                  Re-send Activation Mail ?
                </NavLink>
              </div>
            ) : (
              <h1>Account Activated Successfully!</h1>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(AccountActivation);
