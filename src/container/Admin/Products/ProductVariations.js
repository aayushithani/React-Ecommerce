import React, { Component } from "react";
import { Card, CardDeck } from "react-bootstrap";
import {withRouter,NavLink } from "react-router-dom";
import classes from '../../ProductListing/ProductList/ProductList.module.css'
import axios from "axios";
import { connect } from "react-redux";

class ProductVariation extends Component {
  state = {
    ProductVariation: []
  };

  componentDidMount() {
    const { productId } = this.props.match.params
    axios({
        method: "get",
        url: `/admin/variations/${productId}`,
        headers: {
          Authorization: `bearer ${this.props.token}`,
        },
      })
        .then((response) => {
            this.setState({
                ...this.state,
                ProductVariation:  response.data.data,
            });
          })
  }

  render() {
    return (
      <div className={classes.ProductList}>
        <CardDeck className={classes.CardDeck}>
          {this.state.ProductVariation.map((eachitem,index) => (
              <div className={classes.new} key={index}>
                <Card key={eachitem.id} className={classes.Card}>
                <NavLink to={`/productDetail/${eachitem.VariationId}`}>
                <Card.Img
                      variant="top"
                      src={eachitem.ProductImg}
                      className={classes.CardImg}
                    />
                  </NavLink>
                  <Card.Body className={classes.Body}>
                    <Card.Title className={classes.Title}>
                      {eachitem.ProductName}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </div>
            ))}
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
  
export default  withRouter(connect(mapStateToProps, null)(ProductVariation));
