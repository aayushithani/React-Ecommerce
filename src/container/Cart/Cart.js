import React, { Component } from "react";
import classes from './Cart.module.css';

class Cart extends Component {
  render() {
    return (
      <div className={classes.Cart}>
          <h4>Cart</h4>
        <div className="card">
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
                      <strong>Color</strong>
                    </th>
                    <th></th>
                    <th className="font-weight-bold">
                      <strong>Price</strong>
                    </th>
                    <th className="font-weight-bold">
                      <strong>QTY</strong>
                    </th>
                    <th className="font-weight-bold">
                      <strong>Amount</strong>
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <img
                        src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/13.jpg"
                        alt=""
                        className="img-fluid z-depth-0"
                      />
                    </th>
                    <td>
                      <h5 className="mt-3">
                        <strong>iPhone</strong>
                      </h5>
                      <p className="text-muted">Apple</p>
                    </td>
                    <td>White</td>
                    <td></td>
                    <td>$800</td>
                    <td>
                      <input
                        type="number"
                        value="2"
                        aria-label="Search"
                        className="form-control"
                        style={{width: "100px"}}
                      />
                    </td>
                    <td className="font-weight-bold">
                      <strong>$800</strong>
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">
                      <img
                        src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/6.jpg"
                        alt=""
                        className="img-fluid z-depth-0"
                      />
                    </th>
                    <td>
                      <h5 className="mt-3">
                        <strong>Headphones</strong>
                      </h5>
                      <p className="text-muted">Sony</p>
                    </td>
                    <td>Red</td>
                    <td></td>
                    <td>$200</td>
                    <td>
                      <input
                        type="number"
                        value="2"
                        aria-label="Search"
                        className="form-control"
                        style={{width: "100px"}}
                      />
                    </td>
                    <td className="font-weight-bold">
                      <strong>$600</strong>
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">
                      <img
                        src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/1.jpg"
                        alt=""
                        className="img-fluid z-depth-0"
                      />
                    </th>
                    <td>
                      <h5 className="mt-3">
                        <strong>iPad Pro</strong>
                      </h5>
                      <p className="text-muted">Apple</p>
                    </td>
                    <td>Gold</td>
                    <td></td>
                    <td>$600</td>
                    <td>
                      <input
                        type="number"
                        value="2"
                        aria-label="Search"
                        className="form-control"
                        style={{ width: "100px" }}
                      />
                    </td>
                    <td className="font-weight-bold">
                      <strong>$1200</strong>
                    </td>
                  </tr>

                  <tr>
                    <td colspan="3"></td>
                    <td>
                      <h4 className="mt-2">
                        <strong>Total</strong>
                      </h4>
                    </td>
                    <td className="text-right">
                      <h4 className="mt-2">
                        <strong>$2600</strong>
                      </h4>
                    </td>
                    <td colspan="3" className="text-right">
                      <button type="button">
                        Complete purchase
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

export default Cart;
