import React, { Component } from 'react'
import axios from 'axios'
import SubCategory from './SubCategory';
import classes from '../CategoryList.module.css'
import { connect } from 'react-redux';

export class SubCategoryList extends Component {
    state = {};

    componentDidMount() {
        const { categoryId } = this.props.match.params
        console.log("CATEGORY ID",categoryId);
        axios({
            method: "get",
            url: `/admin/rootCategories/${categoryId}`,
            headers: {
              Authorization: `bearer ${this.props.token}`,
            },
          }).then((response)=> {
            this.setState({
                ...this.state,
                ...response.data.data
            })})
          .catch((error) => {
            console.log(error.message);
          });
          console.log(this.state);
      }

      SubCategoryResponse = () => {
        let output = [];
        let data = this.state;
        for (let key in data) {
          if (this.state.hasOwnProperty(key)) {
            const value = this.state[key];
            console.log("ID",value.id);
            output.push(
              <div key={value.id}>
                <SubCategory data={value} />
              </div>
            );
          }
        }
        return output;
      };
    render() {
        return (
          <div className={classes.CategoryList}>
            <h1>Sub Category</h1>
            {this.SubCategoryResponse()}
          </div>
        );
      }
}
const mapStateToProps = (state) => {
  return {
    token: state.login.token,
  };
};

export default connect(mapStateToProps, null)(SubCategoryList);
