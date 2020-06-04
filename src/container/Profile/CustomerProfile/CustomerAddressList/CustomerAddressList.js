import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import classes from "./UserAddressList.module.css";
import CustomerAddress from './CustomerAddress';

class UserAddressList extends Component {
  state = {};

  componentDidMount() {
    const token = this.props.token;
    console.log(token);
    axios
      .get(`/customers/addresses`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response)=> {
        this.setState({
            ...this.state,
            ...response.data.data
        })})
      .catch((error) => {
        console.log(error.message);
      });
      console.log(this.state);
  }

  UserAddressResponse = () => {
    let output = [];
    let data = this.state;
    for (let key in data) {
        console.log("key",key);
      if (this.state.hasOwnProperty(key)) {
        const value = this.state[key];
        console.log("Address LIST PROPS", value);
        console.log("Address ID:",value.id);
        output.push(
          <div className={classes.Address} key={value.id}>
            <CustomerAddress data={value} />
          </div>
        );
      }
    }
    return output;
  };

  render() {
    console.log(this.state);
    return (
      <div className={classes.Address}>
        <h1>Address</h1>
        {this.UserAddressResponse()}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    token: state.login.token,
  };
};

export default connect(mapStateToProps, null)(UserAddressList);
