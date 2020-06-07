import React, { Component } from "react";
import classes from './ProductMenu.module.css'
import { Container, Row, Col } from "react-bootstrap";
import ProductList from './Products/ProductList';
import AddProduct from './Products/AddProduct';


export class ProductMenu extends Component {
  state = {
    isActive: "ProductList",
  };

  render() {
    return (
      <div className={classes.ProductMenu}>
        <Container>
          <h4> Hello Admin!</h4>
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
          </Row>
        </Container>
        <Row className={classes.Row}>
          <Col sm={12} className={classes.Col}>
            {this.state.isActive === "ProductList" && <ProductList />}
            {this.state.isActive === "AddProduct" && <AddProduct />}
          </Col>
        </Row>
      </div>
    );
  }
}

export default ProductMenu;
