import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import classes from "../CategoryList//CategoryList.module.css";
import axios from 'axios';
import { connect } from "react-redux";

export class AddCategory extends Component {
  state = {
    parentId:null,
      name:null,
    error: null,
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

    if(this.state.parentId == null){
        axios({
            method: "post",
            url: `/admin/categories`,
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
                disabled: true,
              });
              alert("Category Updated Successfully!")
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
    else{
        axios({
            method: "post",
            url: `/admin/categories`,
            data: {
                parentId: this.state.parentId,
              name: this.state.name,
            },
            headers: {
              Authorization: `bearer ${this.props.token}`,
            },
          })
            .then((response) => {
              this.setState({
                ...this.state,
                disabled: true,
              });
              alert("Category Updated Successfully!")
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
    
  }

  render() {
    return (
      <div className={classes.CategoryList}>
        <Container className={classes.Container}>
          <Row className={classes.Row}>
            <Col sm={9} className={classes.Col}>
              <form onSubmit={this.handleSubmit}>
              <div className={classes.name}>
                  <label htmlFor="name">Parent Category ID</label>
                  <input
                    className={classes.name}
                    placeholder="Category Name"
                    type="text"
                    name="parentId"
                    onChange={this.onChangeHandler}
                  />
                </div>
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
                  Add Category
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
  
  export default connect(mapStateToProps, null)(AddCategory) ;
