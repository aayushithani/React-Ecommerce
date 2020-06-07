import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import classes from "./ProductList.module.css";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";

class Product extends Component {
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

  onVariationHandler = () => {
    console.log(this.state.id);
    this.props.history.push(`/sellers/products/${this.state.id}/variations`);
  };

  onDeleteHandler = () => {
    axios({
      method: "delete",
      url: `/sellers/products/${this.state.id}`,
      headers: {
        Authorization: `bearer ${this.props.token}`,
      },
    })
      .then((response) => {
        this.setState({
          ...this.state,
        });
        alert("Product Deleted Successfully!");
      })
      .catch((error) => {
        if (error.response.data.message) {
          this.setState({
            error: error.response.data.message,
          });
        }
      });
  };

  onUpdateHandler = () => {
    axios({
      method: "put",
      url: `/sellers/products/${this.state.id}`,
      data: { 
        name: this.state.ProductName,
        description: this.state.description,
        brand:this.state.brand,
        isCancellable:this.state.is_cancellable,
        isReturnable:this.state.is_returnable
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
        alert("Product Updated Successfully!");
      })
      .catch((error) => {
        console.log(error.response.statusText);
        if (error.response.data.message) {
          this.setState({
            error: error.response.statusText,
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
          <Card.Body>
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
                <label htmlFor="description">Description</label>
                <textarea
                  className={classes.name}
                  placeholder="Category Name"
                  type="text"
                  name="description"
                  value={this.state.description}
                  onChange={this.onChangeHandler}
                  disabled={this.state.disabled ? true : null}
                />
              </div>
              <div className={classes.name}>
                <label htmlFor="cancellable">Cancellable</label>
                <input
                  className={classes.name}
                  placeholder="Category Name"
                  type="text"
                  name="is_cancellable"
                  value={this.state.is_cancellable}
                  onChange={this.onChangeHandler}
                  disabled={this.state.disabled ? true : null}
                />
              </div>
              <div className={classes.name}>
                <label htmlFor="returnable">Returnable</label>
                <input
                  className={classes.name}
                  placeholder="Category Name"
                  type="text"
                  name="is_returnable"
                  value={this.state.is_returnable}
                  onChange={this.onChangeHandler}
                  disabled={this.state.disabled ? true : null}
                />
              </div>
            </div>
                    {this.state.error && (
                  <label htmlFor="Error" style={{ color: "red" }}>
                    {this.state.error}
                  </label>
                )}
            <div style={{ textAlign: "center", margin: "5px" }}>
              {this.state.is_active ? (
                <h5 style={{ color: "green" }}>Product is Active</h5>
              ) : (
                <h5 style={{ color: "red" }}>Product is Not Active</h5>
              )}
            </div>
          </Card.Body>

          <div className={classes.ButtonList}>
            <Button
              variant="outline-danger"
              className={classes.Button}
              onClick={this.onDeleteHandler}
            >
              Delete
            </Button>
            {this.state.disabled ? (
                <Button
                variant="outline-success"
                className={classes.Button}
                onClick={() => this.onEditHandler()}
                >
                  Edit
                </Button>
              ) : null}
              {this.state.disabled ? null : (
                <Button
                variant="outline-danger"
                className={classes.Button}
                type="submit"
                  onClick={() => this.onUpdateHandler()}
                >
                  Update
                </Button>
              )}
            <Button
              variant="info"
              className={classes.Button}
              onClick={this.onVariationHandler}
              style={{ width: "113px" }}
            >
              Variations
            </Button>
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

export default withRouter(connect(mapStateToProps, null)(Product));
