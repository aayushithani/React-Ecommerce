import React, { Component } from "react";
import classes from "./ProductList.module.css";
import { Card, Button, CardDeck } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";

export class AddProduct extends Component {
  state = {
    error: null,
  };

  onChangeHandler = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: `/sellers/products`,
      data: {
        name: this.state.name,
        description: this.state.description,
        category: this.state.category,
        brand: this.state.brand,
        isCancellable: this.state.isCancellable,
        isReturnable: this.state.isReturnable,
      },
      headers: {
        Authorization: `Bearer ${this.props.token}`,
      },
    })
      .then((response) => {
        console.log("Prduct Added");
        alert("Product Added Successfully!");
      })
      .catch((error) => {
        console.log(error.response);
        if (error.response.data.message) {
          this.setState({
            error: error.response.data.message,
          });
        }
      });
  };

  render() {
    return (
      <div className={classes.ProductList}>
        <CardDeck className={classes.CardDeck}>
          <Card
            className={classes.Card}
            style={{ width: "380px", height: "505px" }}
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
                      placeholder="Brand"
                      type="text"
                      name="brand"
                      onChange={this.onChangeHandler}
                    />
                  </div>
                  <div className={classes.name}>
                    <label htmlFor="category">Category ID</label>
                    <input
                      className={classes.name}
                      placeholder="Category ID"
                      type="text"
                      name="category"
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
                      placeholder="Cancellable - True/False"
                      type="text"
                      name="isCancellable"
                      onChange={this.onChangeHandler}
                    />
                  </div>
                  <div className={classes.name}>
                    <label htmlFor="returnable">Returnable</label>
                    <input
                      className={classes.name}
                      placeholder="Returnable - True/False"
                      type="text"
                      name="isReturnable"
                      onChange={this.onChangeHandler}
                    />
                  </div>
                </div>
                {this.state.error && (
                  <label htmlFor="Error" style={{ color: "red" }}>
                    {this.state.error}
                  </label>
                )}
                <div className={classes.ButtonList}>
                  <Button
                    type="submit"
                    variant="info"
                    className={classes.Button}
                    style={{ width: "295px",marginLeft:"440px" }}
                  >
                    Submit
                  </Button>
                </div>
              </Card.Body>
            </form>
          </Card>
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

export default withRouter(connect(mapStateToProps, null)(AddProduct));
