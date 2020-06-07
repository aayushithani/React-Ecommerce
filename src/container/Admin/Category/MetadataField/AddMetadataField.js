import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import classes from "../AddCategory/AddCategory.module.css";
import axios from 'axios';
import { connect } from "react-redux";

export class AddMetadataField extends Component {
  state = {
      name:null,
    error: null
  };

  onChangeHandler = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  };

  onSubCategoryHandler = () => {
        axios({
            method: "post",
            url: `/admin/metadata-field`,
            data: {
              name: this.state.name,
            },
            headers: {
              Authorization: `bearer ${this.props.token}`,
            },
          })
            .then((response) => {
              this.setState({
                ...this.state,
              });
              alert("Category Metadata Field Added Successfully!")
            })
            .catch((error) => {
                console.log(error.response);
              console.log(error.response.data.message);
              if (error.response.data.message) {
                this.setState({
                  error: error.response.data.message,
                });
              }
            });
  }

  render() {
      console.log(this.state);
    return (
      <div className={classes.CategoryList}>
        <Container className={classes.Container}>
          <Row className={classes.Row}>
            <Col sm={12} className={classes.Col}>
              <form onSubmit={this.handleSubmit}>
                <div className={classes.name}>
                  <label htmlFor="name">Category Name</label>
                  <input
                    className={classes.name}
                    placeholder="Category Name"
                    type="text"
                    name="name"
                    onChange={this.onChangeHandler}
                  />
                </div>
              </form>
              {this.state.error && (
                <label htmlFor="Error" style={{ color: "red" }}>
                  {this.state.error}
                </label>
              )}
            </Col>
            <Col sm={4} className={classes.Col}>
              <div className={classes.ButtonList}>
                <Button
                  className={classes.Details}
                  onClick={this.onSubCategoryHandler}
                >
                  Add Category Metadata Field
                </Button>
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
      token: state.login.token,
    };
  };
  
  export default connect(mapStateToProps, null)(AddMetadataField) ;
