import React, { Component } from "react";
import classes from "./Cart.module.css";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
import { Table } from "react-bootstrap";
import DeleteIcon from "../../assets/Icons/DeleteIcon";

class Cart extends Component {
  state = {
    ProductList: [],
  };

  componentDidMount() {
    this.setState({
      ...this.state.ProductList,
      ProductList: this.props.products,
    });
  }

  onCompletePuchase = () => {
    alert("Your order has been placed Successfully!");
  };

  handleDelete = (varitionId) => {
    this.props.deleteItem(varitionId);
  };

  render() {
    let newPrice = 0;
    this.props.products.map(
      (eachitem) => (newPrice = newPrice + eachitem.Price * eachitem.Quantity)
    );
    return (
      <div className={classes.Cart}>
        {this.props.products.length ? (
          <div>
            <h4>Your Cart</h4>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th></th>
                  <th>Product</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {this.props.products.map((eachitem) => (
                  <tr key={eachitem.ProductVariationID}>
                    <td>
                      <img
                        src={eachitem.Image}
                        alt=""
                        style={{ width: "50%" }}
                      />
                    </td>
                    <td>
                      <h6 className="">{eachitem.ProductName}</h6>
                      <p className="text-muted">{eachitem.CategoryName}</p>
                    </td>
                    <td>
                      <p>{eachitem.Description}</p>
                    </td>
                    <td>
                      <strong>र</strong>
                      {eachitem.Price}
                    </td>
                    <td>{eachitem.Quantity}</td>
                    <td>
                      <button
                        className={classes.DeleteButton}
                        onClick={() =>
                          this.handleDelete(eachitem.ProductVariationID)
                        }
                      >
                        <DeleteIcon />
                      </button>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td>
                    <h4 className="mt-2">
                      <strong>Total</strong>
                    </h4>
                  </td>
                  <td className="text-right">
                    <h4 className="mt-2">
                      <strong>र{newPrice}</strong>
                    </h4>
                  </td>
                  <td colSpan={4}>
                    <button
                      type="button"
                      onClick={this.onCompletePuchase}
                      style={{ width: "30%", marginLeft: "30%" }}
                    >
                      Order Now!
                    </button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        ) : (
          <h4>You Cart is Empty</h4>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteItem: (product) => dispatch(actions.deleteFromCart(product)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
