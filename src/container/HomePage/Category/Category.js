import React, { Component } from "react";
import classes from "./Category.module.css";
import { NavLink } from "react-router-dom";
import axios from "axios";

class Category extends Component {
  state = {
    category: [],
  };

  componentDidMount() {
    axios
      .get(`/users/categories`)
      .then((response) => {
        console.log(response.data);
        const updatedCatgory = response.data;
        this.setState({
          category: updatedCatgory,
        });
      })
      .catch((error) => {
        console.log(error.response);
        console.log(error.response.data.message);
      });
  }

  render() {
    console.log(this.state.category);
    
    return (
      <div className="">
          {this.state.category.map((eachitem) => (
            <span className={classes.CategoryItem} key={eachitem.id}>
              <div className={classes.Item} >
              <button>
                <NavLink to={`/productListing/${eachitem.id}`} className={classes.Navlink}>
                  {eachitem.name}
                </NavLink>
              </button>
              </div>
            </span>
          ))}
      </div>
    );
  }
}

export default Category;
