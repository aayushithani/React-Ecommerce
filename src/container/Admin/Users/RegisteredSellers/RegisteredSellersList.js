import React, { Component } from 'react'
import { connect } from 'react-redux';
import axios from 'axios';
import RegisteredSeller from './RegisteredSeller';
import classes from '../Registered.module.css'

export class RegisteredSellersList extends Component {
    state = {};

    componentDidMount() {
        const token = this.props.token;
        axios
          .get(`/admin/sellers`, {
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
    
      RegisteredCustomersResponse = () => {
        let output = [];
        let data = this.state;
        for (let key in data) {
          if (this.state.hasOwnProperty(key)) {
            const value = this.state[key];
            output.push(
              <div className={classes.Address} key={value.id}>
                <RegisteredSeller data={value} />
              </div>
            );
          }
        }
        return output;
      };
    render() {
        return (
          <div className={classes.Registered}>
            <h1>Registered Sellers</h1>
            {this.RegisteredCustomersResponse()}
          </div>
        );
      }
}

const mapStateToProps = (state) => {
    return {
      token: state.login.token,
    };
  };
  
  export default connect(mapStateToProps, null)(RegisteredSellersList);

