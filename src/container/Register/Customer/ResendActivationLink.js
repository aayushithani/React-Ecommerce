import React, { Component } from 'react'
import classes from "../../Authentication/Login/Login.module.css";
import axios from 'axios';

class ResendActivationLink extends Component {
    state = {
        email:null,
        error: null
      };

      onChangeHandler = (e) => {
        this.setState({
            ...this.state,
          email: e.target.value,
        });
        console.log(this.state);
      };

      submitForm = (e) => {
          e.preventDefault();
        axios
          .post(`/users/customers/re-send-activation-link`, {
              email: this.state.email
          })
          .then((response) => {
              alert("Re-Activation Mail has been Sent Successfully!")
          })
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
                <h1>Account Activation</h1>
                <form onSubmit={this.submitForm}>
                  <div className={classes.email}>
                    <label htmlFor="email">Email</label>
                    <input
                      className={classes.email}
                      placeholder="Email"
                      type="email"
                      name="email"
                      required
                      id="email"
                      autoFocus
                      onChange={this.onChangeHandler}
                    />
                  </div>
                  {this.state.error && <label htmlFor="Error" className={classes.Error}>
                    {this.state.error}
                  </label>}
                  <div className={classes.createAccount}>
                  <button type="submit">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )
    }
}

export default ResendActivationLink
