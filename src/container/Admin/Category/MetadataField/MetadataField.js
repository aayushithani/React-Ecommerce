import React, { Component } from "react";
import { Card } from "react-bootstrap";
import classes from '../CategoryList/CategoryList.module.css'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Category extends Component {
  state = {
    ...this.props.data,
  };

  render() {
      console.log(this.state)
    return (
      <Card
        className={classes.Card}
        style={{ width: "350px", height: "160px" }}
      >
        <form onSubmit={this.handleSubmit} noValidate>
        <Card.Body>
          <div className={classes.Text}>
                <div className={classes.name}>
                  <label htmlFor="CategoryId">Category ID</label>
                  <input
                    className={classes.name}
                    placeholder="Category ID"
                    type="text"
                    name="CategoryId"
                    defaultValue={this.state.id}
                    disabled
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
                    onChange={this.onChangeHandler}
                    disabled
                  />
                </div>
                {this.state.error && (
              <label htmlFor="Error" style={{ color: "red" }}>
                {this.state.error}
              </label>
            )}
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

export default withRouter(connect(mapStateToProps, null)(Category));
