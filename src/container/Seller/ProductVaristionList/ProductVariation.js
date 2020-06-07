import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import classes from "../Products/ProductList.module.css";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";

class ProductVariation extends Component {
  state = {
    ...this.props.data,
    error: null,
    disabled: true,
  };

  onChangeHandler = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  };

  onEditHandler = (id) => {
    this.setState({
      ...this.state,
      disabled: false,
    });
  };

  onUpdateHandler = () => {
    axios({
      method: "patch",
      url: `/sellers/products/variations/${this.state.ProductVariationID}`,
      data: {
        price: this.state.price,
        quantityAvailable: this.state.quantity_available,
      },
      headers: {
        Authorization: `bearer ${this.props.token}`,
      },
    })
      .then((response) => {
        this.setState({
          ...this.state,
          disabled: true,
        });
        alert("Product Variation Updated Successfully!");
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

    this.setState({
      ...this.state,
      disabled: !this.state.disabled,
    });
  };

  render() {
    return (
      <Card
        className={classes.Card}
        style={{ width: "380px", height: "460px" }}
      >
        <form onSubmit={this.handleSubmit}>
          <Card.Img
            variant="top"
            src={this.state.Image}
            className={classes.CardImg}
          />
          <Card.Body className={classes.Body}>
            <div className={classes.Text}>
              <div className={classes.name}>
                <label htmlFor="ProductName">Product Name</label>
                <input
                  className={classes.name}
                  placeholder="Category Name"
                  type="text"
                  name="ProductName"
                  value={this.state.ProductName}
                  onChange={this.onChangeHandler}
                  disabled={this.state.disabled ? true : null}
                />
              </div>
              <div className={classes.name}>
                <label htmlFor="brand">Brand</label>
                <input
                  className={classes.name}
                  placeholder="Category Name"
                  type="text"
                  name="brand"
                  value={this.state.brand}
                  onChange={this.onChangeHandler}
                  disabled={this.state.disabled ? true : null}
                />
              </div>
              <div className={classes.name}>
                <label htmlFor="quantity_available">Quantity Available</label>
                <input
                  className={classes.name}
                  placeholder="Category Name"
                  type="text"
                  name="quantity_available"
                  value={this.state.quantity_available}
                  onChange={this.onChangeHandler}
                  disabled={this.state.disabled ? true : null}
                />
              </div>
              <div className={classes.name}>
                <label htmlFor="price">Price</label>
                <input
                  className={classes.name}
                  placeholder="Category Name"
                  type="text"
                  name="price"
                  value={this.state.price}
                  onChange={this.onChangeHandler}
                  disabled={this.state.disabled ? true : null}
                />
              </div>
            </div>
          </Card.Body>

          <div className={classes.ButtonList}>
            {this.state.disabled ? (
              <Button
                variant="outline-success"
                className={classes.Button}
                style={{margin:"18px",width:"343px"}}
                onClick={() => this.onEditHandler()}
              >
                Edit
              </Button>
            ) : null}
            {this.state.disabled ? null : (
              <Button
                variant="outline-danger"
                className={classes.Button}
                style={{margin:"18px",width:"343px"}}
                type="submit"
                onClick={() => this.onUpdateHandler()}
              >
                Update
              </Button>
            )}
          </div>
        </form>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.login.token,
  };
};

export default withRouter(connect(mapStateToProps, null)(ProductVariation));
