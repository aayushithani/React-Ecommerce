import React, { Component } from 'react'
import axios from 'axios'
import Category from './Category';
import classes from './CategoryList.module.css'

export class CategoryList extends Component {
    state = {};

    componentDidMount() {
        axios
        .get(`/users/categories`)
        .then((response)=> {
            console.log(response.data);
            console.log(response.data.data);
            this.setState({
                ...this.state,
                ...response.data
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
              <div key={value.id}>
                <Category data={value} />
              </div>
            );
          }
        }
        return output;
      };
    render() {
        return (
          <div className={classes.CategoryList}>
            <h1>Root Category</h1>
            {this.RegisteredCustomersResponse()}
          </div>
        );
      }
}

export default CategoryList
