import React, { Component } from "react";
import classes from "./UserDetails.module.css";
import { connect } from "react-redux";
import axios from 'axios';

class UserDetails extends Component {
  state = {
    user: {},
    edit: true,
    update: false,
  };

  componentDidMount() {
    const token = this.props.token;
    axios.defaults.headers.common['Authorization'] = token
    console.log(token);
    axios.get(`/customers/profile`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
    .then((response) => {
      console.log(response.data);
      const updatedUser = response.data;
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
    });
  };

  onUpdateHandler = (e) => {
    this.setState({
      edit: true,
      update: false,
    });
  };

  render() {
    return (
      <div className={classes.UserDetails}>
        <form onSubmit={this.submitHandler}>
          <h1>User Details!</h1>
          <div className={classes.firstName}>
            <label htmlFor="firstName">First Name</label>
            <input
              className={classes.firstName}
              placeholder="First Name"
              type="text"
              name="firstName"
              value={this.state.user.firstName}
            />
          </div>
          <div className={classes.middleName}>
            <label htmlFor="middleName">Middle Name</label>
            <input
              className={classes.middleName}
              placeholder="Middle Name"
              type="text"
              name="middleName"
              value={this.state.user.middleName}
            />
          </div>
          <div className={classes.lastName}>
            <label htmlFor="lastName">Last Name</label>
            <input
              className={classes.lastName}
              placeholder="Last Name"
              type="text"
              name="lastName"
              value={this.state.user.lastName}
            />
          </div>
          <div className={classes.contact}>
            <label htmlFor="contact">Contact</label>
            <input
              className={classes.contact}
              placeholder="Contact"
              type="contact"
              name="contact"
              value={this.state.user.contact}
            />
          </div>
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
