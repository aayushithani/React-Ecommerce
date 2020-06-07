import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux';
import Category from './Category';
import classes from '../Products/ProductList.module.css';
import { CardDeck } from "react-bootstrap";


export class CategoryList extends Component {
    componentDidMount() {
        const token = this.props.token;
        axios
          .get(`/sellers/categories`, {
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

      CategoryResponse = () => {
        let output = [];
        let data = this.state;
        for (let key in data) {
          if (this.state.hasOwnProperty(key)) {
            const value = this.state[key];
            output.push(
              <div className={classes.Product} key={value.id}>
                <Category data={value} />
              </div>
            );
          }
        }
        return output;
      };
    
    render() {
        return (
            <div className={classes.ProductList}>
                <h1>List Of Category</h1>
                <CardDeck className={classes.CardDeck}>
                    {this.CategoryResponse()}
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
  
export default  connect(mapStateToProps, null)(CategoryList);
