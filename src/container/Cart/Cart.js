import React, { Component } from "react";
import classes from "./Cart.module.css";
import { connect } from "react-redux";

class Cart extends Component {
  state = {
    ProductList: [{}],
  };

  componentDidMount() {
    const updatedProductList = this.props.orderData;
    this.setState({
      ...this.state.ProductList,
      ProductList: updatedProductList,
    });
  }

  onCompletePuchase = () => {
    alert("Your order has been placed Successfully!");
  };

  render() {
    let newPrice = 0;
    this.state.ProductList.map((eachitem) => newPrice =  newPrice + eachitem.Price)
    
    return (
      <div className={classes.Cart}>
        <h4>Your Cart</h4>
        <div className="card container">
          <div className="card-body">
            <div className="table-responsive">
              <table className="table product-table">
                <thead className="mdb-color lighten-5">
                  <tr>
                    <th></th>
                    <th className="font-weight-bold">
                      <strong>Product</strong>
                    </th>
                    <th className="font-weight-bold">
                      <strong>Description</strong>
                    </th>
                    <th></th>
                    <th className="font-weight-bold">
                      <strong>Price</strong>
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.ProductList.map((eachitem) => (
                    <tr key={eachitem.ProductVariationID}>
                      <th scope="row">
                        <img
                          src={eachitem.Image}
                          alt=""
                          className="img-fluid z-depth-0"
                          style={{width:"59%"}}
                        />
                      </th>
                      <td>
                        <h6 className="">{eachitem.ProductName}</h6>
                        <p className="text-muted">{eachitem.CategoryName}</p>
                      </td>
                      <td>
                        <p>{eachitem.Description}</p>
                      </td>
                      <td></td>
                      <td>
                        <strong>र</strong>
                        {eachitem.Price}
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td colSpan="2"></td>
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
                    <td colSpan="3" className="text-right">
                      <button type="button" onClick={this.onCompletePuchase}>
                        Order Now!
                        <i className="fas fa-angle-right right"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.login.token,
    orderData: state.purchaseProduct.orderData,
  };
};

export default connect(mapStateToProps, null)(Cart);
