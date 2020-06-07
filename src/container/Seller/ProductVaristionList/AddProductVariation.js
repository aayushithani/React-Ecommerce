import React, { Component } from 'react'
import classes from "../Products/ProductList.module.css";
import { Card, Button,CardDeck } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import axios from 'axios';

export class AddProductVariation extends Component {

  state = {
    error:null
  }

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
      url: `/sellers/products/variations`,
      data: {
        productId: this.state.productId,
        quantityAvailable: parseFloat(this.state.quantityAvailable),
        price: parseFloat(this.state.price)
      },
      headers: {
        Authorization: `Bearer ${this.props.token}`,
      },
    })
      .then((response) => {
       console.log("Prduct Added")
        console.log(response.data.data.id);
        console.log(response.data);
      })
    //    return (axios.post("/sellers/products/variations/image/", { email: this.state.user.email})
      .then((response) => {
        console.log(response.data.data);
        this.props.onUserRole(response.data.data);
        alert("Product Added Successfully!")
      })
      .catch((error) => {
          this.setState({
            error: error.response,
        })
      });
  }

    render() {
        return (
          <div className={classes.ProductList}>
          <CardDeck className={classes.CardDeck}>
            <Card
            className={classes.Card}
            style={{ width: "380px", height: "284px" }}
          >
            <form onSubmit={this.handleSubmit}>
              <Card.Body>
                <div className={classes.Text}>
                  <div className={classes.name}>
                    <label htmlFor="name">Product ID</label>
                    <input
                      className={classes.name}
                      placeholder="Product Id"
                      type="text"
                      name="productId"
                      onChange={this.onChangeHandler}
                    />
                  </div>
                  <div className={classes.name}>
                    <label htmlFor="quantityAvailable">Quantity Available</label>
                    <input
                      className={classes.name}
                      placeholder="Category Name"
                      type="text"
                      name="quantityAvailable"
                      onChange={this.onChangeHandler}
                    />
                  </div>
                  <div className={classes.name}>
                    <label htmlFor="price">Price</label>
                    <input
                      className={classes.name}
                      placeholder="Category Name"
                      type="text"
                      name="price"
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
        )
    }
}

const mapStateToProps = (state) => {
  return {
    token: state.login.token,
  };
};

export default withRouter(connect(mapStateToProps, null)(AddProductVariation));
