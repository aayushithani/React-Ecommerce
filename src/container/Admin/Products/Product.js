import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import classes from "./ProductList.module.css";
import { withRouter } from "react-router-dom";
import axios from 'axios';
import { connect } from "react-redux";

class Product extends Component {
  state = {
    ...this.props.data,
    error: null,
  };

  onVariationHandler = () => {
    console.log(this.state.id);
    this.props.history.push(`/productVariation/${this.state.id}`);
  };

  onDeactivateHandler = () => {
    axios({
      method: "put",
      url: `/admin/products/deactivate/${this.state.id}`,
      headers: {
        Authorization: `bearer ${this.props.token}`,
      },
    })
      .then((response) => {
        this.setState({
          ...this.state,
        });
        alert("Product De-Activated Successfully!");
      })
      .catch((error) => {
        if (error.response.data.message) {
          this.setState({
            error: error.response.data.message,
          });
        }
      });
  }

  onActivateHandler = () => {
    axios({
      method: "put",
      url: `/admin/products/activate/${this.state.id}`,
      headers: {
        Authorization: `bearer ${this.props.token}`,
      },
    })
      .then((response) => {
        this.setState({
          ...this.state,
        });
        alert("Product Activated Successfully!");
      })
      .catch((error) => {
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
        style={{ width: "401px", height: "303px" }}
        className={classes.Card}
      >
        <Card.Body>
          <Card.Title className={classes.Title}>
            {this.state.ProductName} - {this.state.brand}
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {this.state.CategoryName}
          </Card.Subtitle>
          <Card.Text className={classes.Text}>
            {this.state.description}
          </Card.Text>
        </Card.Body>
        <div style={{textAlign:"center",margin:"5px"}}>
          {this.state.ProductActive ? 
            <h4 style={{color:"green"}}>Product is Active</h4> 
            :
            <h4 style={{color:"red"}}>Product is Not Active</h4> 
          }
          </div>
        <div className={classes.ButtonList}>
          {this.state.ProductActive ? (
            <Button variant="outline-danger" className={classes.Button} onClick={this.onDeactivateHandler}>
              De-Activate
            </Button>
          ) : (
            <Button variant="outline-success" className={classes.Button} onClick={this.onActivateHandler}>
              Activate
            </Button>
          )}
          <Button
            variant="info"
            className={classes.Button}
            onClick={this.onVariationHandler}
          >
            Variations
          </Button>
        </div>
      </Card>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    token: state.login.token,
  };
};

export default  withRouter(connect(mapStateToProps, null)(Product));
