import React, { Component } from 'react'
import { Card,Button } from "react-bootstrap";
import classes from '../CategoryList.module.css'
import axios from 'axios';
import { connect } from 'react-redux';

class SubCategory extends Component {
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
          method: "put",
          url: `/admin/categories`,
          data: {
            id: this.state.id,  
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

    render() {
        return (
          <Card
          className={classes.Card}
          style={{ width: "350px", height: "292px",marginBottom:"10px" }}
        >
          <form onSubmit={this.handleSubmit} noValidate>
          <Card.Body>
            <div className={classes.Text}>
                  <div className={classes.name}>
                    <label htmlFor="CategoryId">Category ID</label>
                    <input
                      className={classes.name}
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
                      disabled={this.state.disabled ? true : null}
                    />
                  </div>
                  {this.state.error && (
              <label htmlFor="Error" style={{ color: "red" }}>
                {this.state.error}
              </label>
            )}
            </div>
            <div className={classes.ButtonList}>
                {this.state.disabled ? (
                  <Button
                    className={classes.EditButton}
                    onClick={() => this.onEditHandler()}
                    style={{width:"304px"}}
                  >
                    Edit
                  </Button>
                ) : null}
                {this.state.disabled ? null : (
                  <Button
                    className={classes.UpdateButton}
                    type="submit"
                    onClick={() => this.onUpdateHandler()}
                    style={{width:"304px"}}
                  >
                    Update
                  </Button>
                )}
              </div>
            </Card.Body>
            </form>
        </Card>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      token: state.login.token,
    };
  };
  
  export default connect(mapStateToProps, null)(SubCategory);
