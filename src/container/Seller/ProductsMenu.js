import React, { Component } from "react";
import classes from './ProductMenu.module.css'
import { Container, Row, Col } from "react-bootstrap";
import ProductList from './Products/ProductList';
import AddProduct from './Products/AddProduct';
import AddProductVariation from './ProductVaristionList/AddProductVariation';


export class ProductMenu extends Component {
  state = {
    isActive: "ProductList",
  };

  render() {
    return (
      <div className={classes.ProductMenu}>
        <Container>
          <Row>
            <Col>
              <button className={classes.MenuButton}
                type="submit"
                onClick={() => {
                  this.setState({ ...this.state, isActive: "ProductList" });
                }}
              >
                ProductList
              </button>
            </Col>
            <Col>
              <button className={classes.MenuButton}
                type="submit"
                onClick={() => {
                  this.setState({
                    ...this.state,
                    isActive: "AddProduct",
                  });
                }}
              >
                AddProduct
              </button>
            </Col>
            <Col>
              <button className={classes.MenuButton}
                type="submit"
                onClick={() => {
                  this.setState({ ...this.state, isActive: "AddProductVariation" });
                }}
              >
                AddProductVariation
              </button>
            </Col>
          </Row>
        </Container>
        <Row className={classes.Row}>
          <Col sm={12} className={classes.Col}>
            {this.state.isActive === "ProductList" && <ProductList />}
            {this.state.isActive === "AddProduct" && <AddProduct />}
            {this.state.isActive === "AddProductVariation" && <AddProductVariation />}
          </Col>
        </Row>
      </div>
    );
  }
}

export default ProductMenu;
