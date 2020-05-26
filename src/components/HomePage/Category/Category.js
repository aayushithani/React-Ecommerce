import React, { Component } from "react";
import { Card, CardDeck } from "react-bootstrap";
import classes from "./Category.module.css";
import { NavLink } from "react-router-dom";
import Data from "./MockData";

class Category extends Component {
  state = {
    categoryData: [...Data().category],
  };

  // componentDidMount(){

  // }

  render() {
    console.log(this.state.categoryData);
    const { categoryData } = this.state;

    return (
      <div className={classes.Category}>
        <CardDeck className={classes.CardDeck}>
          {categoryData &&
            !!categoryData.length &&
            categoryData.map((item) => (
              <div className={classes.new}>
                <Card key={item.id} className={classes.Card}>
                  <NavLink to="/productList">
                    <Card.Img
                      variant="top"
                      src={item.categoryImage}
                      className={classes.CardImg}
                    />
                  </NavLink>
                  <Card.Body className={classes.Body}>
                    <Card.Title className={classes.Title}>
                      {item.categoryName}
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

export default Category;
