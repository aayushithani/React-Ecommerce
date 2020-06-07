import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux';
import ProductVariation from './ProductVariation';
import classes from '../Products/ProductList.module.css';
import { CardDeck } from "react-bootstrap";


export class ProductVariationList extends Component {
    componentDidMount() {
        const { productId } = this.props.match.params
        axios
          .get(`/sellers/products/${productId}/variations`, {
            headers: {
              Authorization: `Bearer ${this.props.token}`,
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

      ProductVariationResponse = () => {
        let output = [];
        let data = this.state;
        for (let key in data) {
          if (this.state.hasOwnProperty(key)) {
            const value = this.state[key];
            output.push(
              <div className={classes.Product} key={value.id}>
                <ProductVariation data={value} />
              </div>
            );
          }
        }
        return output;
      };
    
    render() {
        return (
            <div className={classes.ProductList}>
                <h1>List Of Products Variations</h1>
                <CardDeck className={classes.CardDeck}>
                    {this.ProductVariationResponse()}
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
  
export default  connect(mapStateToProps, null)(ProductVariationList);
