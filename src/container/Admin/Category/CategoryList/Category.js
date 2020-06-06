import React, { Component } from 'react'
import { Container, Row, Col,Button } from "react-bootstrap";
import classes from './CategoryList.module.css'
import axios from 'axios';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

class Category extends Component {
    state = {
        ...this.props.data,
        error: null,
        disabled: true,
      };

      onChangeHandler = (event) => {
          console.log(event.target.name);
          console.log(event.target.value);
        this.setState({
          ...this.state,
          [event.target.name]: event.target.value,
        });
      };

      onEditHandler = (id) => {
        this.setState({
          ...this.state,
          disabled: false,
        });
      };

      onUpdateHandler = () => {
        axios({
          method: "post",
          url: `/admin/rootCategories/${this.state.id}`,
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
    
        this.setState({
          ...this.state,
          disabled: !this.state.disabled,
        });
      };

      onSubCategoryHandler = () => {
        console.log(this.state.id);
        this.props.history.push(`/SubCategory/${this.state.id}`);
      }


    render() {
        return (
             <Container className={classes.Container}>
        <Row className={classes.Row}>
          <Col sm={9} className={classes.Col}>
            <form onSubmit={this.handleSubmit} noValidate>
              <div className={classes.CategoryId}>
                <label htmlFor="CategoryId">ID</label>
                <input
                  className={classes.CategoryId}
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
                  disabled={this.state.disabled ? true : null}
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
            {this.state.disabled ? (
              <Button className={classes.EditButton} onClick={() => this.onEditHandler()}>Edit</Button>
            ) : null}
            {this.state.disabled ? null : (
              <Button className={classes.UpdateButton} type="submit" onClick={() => this.onUpdateHandler()}>
                Update
              </Button>
            )} 
            <Button
            className={classes.Details}
            onClick={this.onSubCategoryHandler}
          >
            Details
          </Button>
          </div>
          </Col>
        </Row>
      </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      token: state.login.token,
    };
  };
  
  export default withRouter(connect(mapStateToProps, null)(Category)) ;
