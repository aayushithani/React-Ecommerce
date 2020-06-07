import React, { Component } from "react";
import { Card, CardDeck } from "react-bootstrap";
import { NavLink, withRouter } from "react-router-dom";
import classes from "./ProductList.module.css";
import axios from "axios";

class ProductList extends Component {
  state = {
    ProductList: []
  };

  componentDidMount() {
    // const categoryID = this.props.id;
    // console.log(this.props.id);
    const { categoryId } = this.props.match.params

    axios
      .get(`/users/categories/${categoryId}`)
      .then((response) => {
        console.log(response.data);
        const updatedProductList = response.data;
        this.setState({
          ProductList: updatedProductList,
        });
      })
      .catch((error) => {
        console.log(error.response);
        console.log(error.response.data.message);
      });
  }

  render() {
    console.log(this.state.ProductList);
    return (
      <div className={classes.ProductList}>
        <CardDeck className={classes.CardDeck}>
          {this.state.ProductList.map((eachitem,index) => (
              <div className={classes.new} key={index}>
                <Card key={eachitem.ProductID} className={classes.Card}>
                  <NavLink to={`/productDetail/${eachitem.productVariationID}`}>
                    <Card.Img
                      variant="top"
                      src={eachitem.Image}
                      className={classes.CardImg}
                    />
                  </NavLink>
                  <Card.Body className={classes.Body}>
                    <Card.Title className={classes.Title}>
                      {eachitem.ProductName}
                      {/* <span>
                        <NavLink to="/" className={classes.NavLink}>
                          <EyeIcon />
                        </NavLink>
                        <NavLink to="/" className={classes.NavLink}>
                          <CartIcon />
                        </NavLink>
                        <NavLink to="/" className={classes.NavLink}>
                          <HeartIcon />
                        </NavLink>
                      </span> */}
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

export default withRouter(ProductList) ;
