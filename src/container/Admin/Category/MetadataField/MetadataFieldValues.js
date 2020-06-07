import React, { Component } from "react";
import { Card ,Button} from "react-bootstrap";
import classes from '../CategoryList/CategoryList.module.css'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import axios from 'axios';

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
      console.log(this.state);
    this.setState({
      ...this.state,
      disabled: false,
    });
  };

  onUpdateHandler = () => {
    axios({
      method: "put",
      url: `/admin/metadata-field-values`,
      data: {
        categoryMetadataFieldId:this.state.category_metadata_field_id,
        categoryId:this.state.category_id,
        value: this.state.value,
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
        alert("Category Metadata Field Updated Successfully!");
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
      console.log(this.state)
    return (
      <Card
        className={classes.Card}
        style={{ width: "350px", height: "300" }}
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
                    defaultValue={this.state.category_id}
                    disabled
                  />
                </div>
                <div className={classes.name}>
                  <label htmlFor="CategoryId">Category Metadata Field ID</label>
                  <input
                    className={classes.name}
                    type="text"
                    name="category_metadata_field_id"
                    defaultValue={this.state.category_metadata_field_id}
                    disabled
                  />
                </div>
                <div className={classes.name}>
                  <label htmlFor="name">Value</label>
                  <input
                    className={classes.name}
                    placeholder="Value"
                    type="text"
                    name="value"
                    value={this.state.value}
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
                >
                  Edit
                </Button>
              ) : null}
              {this.state.disabled ? null : (
                <Button
                  className={classes.UpdateButton}
                  type="submit"
                  onClick={() => this.onUpdateHandler()}
                >
                  Update
                </Button>
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
