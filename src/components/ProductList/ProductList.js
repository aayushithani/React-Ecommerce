import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Card, CardDeck } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import classes from "./ProductList.module.css";
import Data from '../HomePage/Category/MockData';

class ProductList extends Component {
  state = {
    ProductListData: [...Data().category],
  };

  render() {
    const { ProductListData } = this.state;

    return (
      <div>
        <Container className={classes.ProductList}>
          <Row className={classes.Row}>
            <Col sm={3} className={classes.Col}>
              sm=3
            </Col>

            <Col sm={9} className={classes.Col}>
            <div className={classes.Category}>
        <CardDeck className={classes.CardDeck}>
          {ProductListData &&
            !!ProductListData.length &&
            ProductListData.map((item) => (
              <div className={classes.new}>
                <Card key={item.id} className={classes.Card}>
                  <NavLink to="/productDetail">
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
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ProductList;
