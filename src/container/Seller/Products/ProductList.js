import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux';
import Product from './Product';
import classes from './ProductList.module.css';
import { CardDeck } from "react-bootstrap";


export class ProductList extends Component {
    componentDidMount() {
        const token = this.props.token;
        axios
          .get(`/sellers/products`, {
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
              <div className={classes.Product} key={value.id}>
                <Product data={value} />
              </div>
            );
          }
        }
        return output;
      };
    
    render() {
        return (
            <div className={classes.ProductList}>
                <h1>List Of Products</h1>
                <CardDeck className={classes.CardDeck}>
                    {this.RegisteredCustomersResponse()}
                </CardDeck>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      token: state.login.token,
    };
  };
  
export default  connect(mapStateToProps, null)(ProductList);
