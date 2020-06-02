import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import classes from "./ProductDetail.module.css";
import { withRouter } from "react-router-dom";
import axios from "axios";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";

class ProductDetail extends Component {
  state = {
    ProductVariation: {},
  };

  componentDidMount() {
    const { productVariationId } = this.props.match.params;

    axios
      .get(`/users/products/${productVariationId}`)
      .then((response) => {
        const updatedProductVariation = response.data[0];
        this.setState({
          ProductVariation: updatedProductVariation,
        });
      })
      .catch((error) => {
        console.log(error.response);
        console.log(error.response.data.message);
      });
  }

  onClickHandler = () => {
    if(!this.props.isAuthenticated){
      console.log(this.props.history)
      // alert("Please LogIn!",this.props.history);
      this.props.history.push("/login");
    }
    else{
      console.log("Product detail state:", this.state.ProductVariation);
      console.log("product detail token:", this.props.token);
      this.props.onOrderProduct(this.state.ProductVariation);
      this.props.history.push("/cart");
    }
  };

  render() {
    console.log(this.state.ProductVariation);
    // console.log(this.state.ProductVariation.ProductName);
    return (
      <div>
        <Container className={classes.ProductDetail}>
          {/* -------------------------------ROW 1------------------------------------------------------- */}
          <Row className={classes.Row}>
            <Col className={classes.Col}>
              <div className={classes.ProductName}>
                <h3>
                  <p>{this.state.ProductVariation.Brand}</p>
                </h3>
              </div>
            </Col>
          </Row>
          {/* -------------------------------ROW 2------------------------------------------------------ */}
          {/* PRODUCT IMAGE ---  COL 1*/}
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
            {/* PRODUCT Price ---  COL 2*/}
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

                <p style={{ color: "green" }}>In stock.</p>
                <p style={{ fontWeight: "bold" }}>Delivery by: Wed, Jun 3</p>
                <p style={{ color: "green" }}>
                  <ins>Fastest delivery: May 28 - 30 Details</ins>
                </p>

                <p style={{ textAlign: "justify" }}>
                  <strong> Description:</strong>{" "}
                  {this.state.ProductVariation.Description}
                </p>
              </div>
            </Col>
            {/*Buy now------------COL 3*/}
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
                      <Form className={classes.FormGroup}>
                        <Form.Group controlId="exampleForm.SelectCustomSizeSm">
                          <Form.Label style={{ margin: "10px" }}>
                            Quantity
                          </Form.Label>
                          <Form.Control
                            as="select"
                            size="sm"
                            custom
                            className={classes.Quantity}
                          >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </Form.Control>
                        </Form.Group>
                      </Form>
                      <div>
                        {/* <NavLink to="/cart"> */}
                          <button
                            type="submit"
                            onClick={this.onClickHandler}
                          >
                            Add To Cart
                          </button>
                        {/* </NavLink> */}
                        <button type="submit">Buy Now</button>
                        <button type="submit">Add To WishList</button>
                      </div>
                      <InputGroup
                        className="mb-3"
                        style={{ margin: "10px 10px 10px 0px", width: "100%" }}
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
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.login.isAuthenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onOrderProduct: (orderData) =>
      dispatch(actions.purchaseProduct(orderData)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail));
