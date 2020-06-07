import React, { Component } from 'react'
import classes from "./ProductList.module.css";
import { Card, Button } from "react-bootstrap";
import axios from 'axios';

export class AddProduct extends Component {

  state = {}

  onChangeHandler = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = () => {
    axios({
      method: "post",
      url: `/sellers/products`,
      data: {
        name: this.state.name,
        description:this.state.description,
        category:this.state.category,
        brand:this.state.brand,
        isCancellable:this.state.isCancellable,
        isReturnable:this.state.isReturnable
      },
      headers: {
        Authorization: `bearer ${this.props.token}`,
      },
    })
      .then((response) => {
        this.setState({
          ...this.state,
        });
        alert("Product Added Successfully!")
      })
      .catch((error) => {
          console.log(error.response);
        console.log(error.response.data.message);
        if (error.response.data.message) {
          this.setState({
            error: error.response.data.message,
          });
        }
      });
  }

    render() {
        return (
            <Card
            className={classes.Card}
            style={{ width: "380px", height: "460px" }}
          >
            <form onSubmit={this.handleSubmit}>
              <Card.Body>
                <div className={classes.Text}>
                  <div className={classes.name}>
                    <label htmlFor="name">Product Name</label>
                    <input
                      className={classes.name}
                      placeholder="Name"
                      type="text"
                      name="name"
                      onChange={this.onChangeHandler}
                    />
                  </div>
                  <div className={classes.name}>
                    <label htmlFor="brand">Brand</label>
                    <input
                      className={classes.name}
                      placeholder="Category Name"
                      type="text"
                      name="brand"
                      onChange={this.onChangeHandler}
                    />
                  </div>
                  <div className={classes.name}>
                    <label htmlFor="description">Description</label>
                    <textarea
                      className={classes.name}
                      placeholder="Description"
                      type="text"
                      name="description"
                      onChange={this.onChangeHandler}
                    />
                  </div>
                  <div className={classes.name}>
                    <label htmlFor="cancellable">Cancellable</label>
                    <input
                      className={classes.name}
                      placeholder="Category Name"
                      type="text"
                      name="isCancellable"
                      onChange={this.onChangeHandler}
                    />
                  </div>
                  <div className={classes.name}>
                    <label htmlFor="returnable">Returnable</label>
                    <input
                      className={classes.name}
                      placeholder="Category Name"
                      type="text"
                      name="isReturnable"
                      onChange={this.onChangeHandler}
                    />
                  </div>
                </div>
              </Card.Body>
    
              <div className={classes.ButtonList}>
                <Button
                  variant="info"
                  className={classes.Button}
                  style={{ width: "113px" }}
                >
                  Variations
                </Button>
              </div>
            </form>
          </Card>
        )
    }
}

export default AddProduct
