import React, { Component } from "react";
import { Container, Row, Col, InputGroup, FormControl } from "react-bootstrap";
import classes from "./ProductDetail.module.css";
import { withRouter } from "react-router-dom";
import axios from "axios";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";

class ProductDetail extends Component {
  state = {
    ProductVariation: [],
  };

  componentDidMount() {
    const { productVariationId } = this.props.match.params;
    console.log(productVariationId);
    axios
      .get(`/users/products/${productVariationId}`)
      .then((response) => {
        const updatedProductVariation = response.data[0];
        console.log("RESPONSE", response.data[0]);
        this.setState({
          ProductVariation: updatedProductVariation,
        });
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(this.state);
  }

  onClickHandler = () => {
    if (!this.props.isAuthenticated) {
      alert("Please Login To View Cart!");
      this.props.history.push("/login");
    } else {
      this.props.onAddToCart(this.state.ProductVariation);
    }
  };

  render() {
    return (
      <div>
        <Container className={classes.ProductDetail}>
          <Row className={classes.Row}>
            <Col className={classes.Col}>
              <div className={classes.ProductName}>
                <h3>
                  <p>{this.state.ProductVariation.Brand}</p>
                </h3>
              </div>
            </Col>
          </Row>
          <Row className={classes.Row}>
            <Col sm={4} className={classes.Col}>
              <div className={classes.MainProductImg}>
                <img
                  src={this.state.ProductVariation.Image}
                  alt="5 Terre"
                  className={classes.ProductImg}
                  style={{ width: "100%" }}
                />
              </div>
            </Col>
            <Col sm={5} className={classes.Col}>
              <div>
                <h3>
                  <p>{this.state.ProductVariation.ProductName}</p>
                </h3>
                <h6>
                  <p style={{ fontWeight: "bold" }}>
                    Price: ₹ {this.state.ProductVariation.Price}
                  </p>
                </h6>
                {this.props.authority === "ROLE_ADMIN"  || this.props.authority === "ROLE_SELLER" ? null: (
                <div>
                <p style={{ color: "green" }}>In stock.</p>
                <p style={{ fontWeight: "bold" }}>Delivery by: Wed, Jun 3</p>
                <p style={{ color: "green" }}>
                  <ins>Fastest delivery: May 28 - 30 Details</ins>
                </p>
                </div>
                )}

                <p style={{ textAlign: "justify" }}>
                  <strong> Description:</strong>{" "}
                  {this.state.ProductVariation.Description}
                </p>
              </div>
            </Col>
            {this.props.authority === "ROLE_ADMIN"  || this.props.authority === "ROLE_SELLER" ? null: (
              <Col sm={3} className={classes.ProductBuyNow}>
                <div className={classes.ProductPrice}>
                  <Container fluid="md">
                    <Row className={classes.ProductPriceRow}>
                      <Col
                        className={classes.ProductBuyNow}
                        style={{
                          border: "1px solid #EAEDED",
                          borderRadius: "3px",
                        }}
                      >
                        <div>
                          <button type="submit" onClick={this.onClickHandler}>
                            Add To Cart
                          </button>
                          <button type="submit">Buy Now</button>
                          <button type="submit">Add To WishList</button>
                        </div>

                        <InputGroup
                          className="mb-3"
                          style={{
                            margin: "10px 10px 10px 0px",
                            width: "100%",
                          }}
                        >
                          <InputGroup.Prepend>
                            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                          </InputGroup.Prepend>
                          <FormControl
                            aria-label="Text input with checkbox"
                            defaultValue="Add gift options"
                          />
                        </InputGroup>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </Col>
            )}
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.login.isAuthenticated,
    authority: state.login.authority,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddToCart: (item) => dispatch(actions.addToCart(item)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProductDetail)
);
