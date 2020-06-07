import React, { Component } from "react";
import { Card } from "react-bootstrap";
import classes from '../Products/ProductList.module.css';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Product extends Component {
  state = {
    ...this.props.data,
    disabled: true,
  };

  render() {
    return (
      <Card
        className={classes.Card}
        style={{ width: "380px", height: "168px" }}>
        <form onSubmit={this.handleSubmit}>
          <Card.Body>
            <div className={classes.Text}>
              <div className={classes.name}>
                <label htmlFor="CategoryId">Category ID</label>
                <input
                  className={classes.name}
                  placeholder="Category ID"
                  type="text"
                  name="CategoryId"
                  value={this.state.id}
                  disabled={this.state.disabled ? true : null}
                />
              </div>
              <div className={classes.name}>
                <label htmlFor="name">Category Name</label>
                <input
                  className={classes.name}
                  placeholder="Category Name"
                  type="text"
                  name="name"
                  value={this.state.name}
                  disabled={this.state.disabled ? true : null}
                />
              </div>
            </div>
          </Card.Body>
        </form>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.login.token,
  };
};

export default withRouter(connect(mapStateToProps, null)(Product));
