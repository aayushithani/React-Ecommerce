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
import Men from "../assets/images/CategoryImage/Men.jpg";

class ProductDetail extends Component {
  render() {
    return (
      <div>
        <Container className={classes.ProductDetail}>
          {/* -------------------------------ROW 1------------------------------------------------------- */}
          <Row className={classes.Row}>
            <Col className={classes.Col}>
              <div className={classes.ProductName}>
                <h3>
                  <p>Diverse Men's Slim Fit Casual Trousers</p>
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
                  src={Men}
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
                  <p>Diverse Men's Slim Fit Casual Trousers</p>
                </h3>
                <h6>
                  <p style={{ color: "blue" }}>
                    <del>M.R.P.- ₹ 1,999.00</del>
                  </p>
                  <p style={{ fontWeight: "bold" }}>Price: ₹ 809.00</p>
                  <p>You Save: ₹ 1,190.00 (60%)</p>
                </h6>

                <p style={{ color: "green" }}>In stock.</p>
                <p style={{ fontWeight: "bold" }}>Delivery by: Wed, Jun 3</p>
                <p style={{ color: "green" }}><ins>Fastest delivery: May 28 - 30 Details</ins></p>

                <p style={{textAlign:"justify"}}>
                  <b>Care Instructions:</b> machine wash Fit Type: Slim Fit 98% Cotton
                  and 2% elastane Slim fit Satin stretch trousers, waistband
                  with belt loops, zippered fly with button closure Washed to
                  enhance the softness of the fabric against skin Wash
                  Instructions: Machine wash warm, wash dark colors separately,
                  do not bleach, tumble dry low, warm iron.
                </p>
              </div>
            </Col>
            {/*Buy now------------COL 3*/}
            <Col sm={3} className={classes.ProductBuyNow}>
              <div className={classes.ProductPrice}>
                <Container fluid="md">
                  <Row className={classes.ProductPriceRow}>
                    <Col className={classes.ProductBuyNow} style={{border:"1px solid #EAEDED",borderRadius:"3px"}}>
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
                        <button type="submit" >Add To Cart</button>
                        <button type="submit" >Buy Now</button>
                        <button type="submit" >Add To WishList</button>
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
                          value="Add gift options"
                        />
                      </InputGroup>
                    </Col>
                  </Row>
                </Container>
              </div>
            </Col>
          </Row>
        
          {/* -------------------------------ROW 4------------------------------------------------------ */}
          {/* <Row className={classes.Row}>
            <Col sm={4} className={classes.Col}></Col>
            <Col sm={8} className={classes.Col}>
              Specs
            </Col>
          </Row> */}
        </Container>
      </div>
    );
  }
}

export default ProductDetail;
