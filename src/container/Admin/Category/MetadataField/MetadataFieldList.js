import React, { Component } from 'react'
import axios from 'axios'
import MetadataField from './MetadataField'
import classes from '../CategoryList/CategoryList.module.css'
import {CardDeck} from 'react-bootstrap';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

export class MetadataFieldList extends Component {
    state = {};

    componentDidMount() {
        axios
        .get(`/admin/metadata-fields`,{headers: {
            Authorization: `bearer ${this.props.token}`,
          }})
        .then((response)=> {
            console.log(response.data);
            console.log(response.data.data);
            this.setState({
                ...this.state,
                ...response.data.data
            })})
          .catch((error) => {
            console.log(error.message);
          });
          console.log(this.state);
      }

      CategoryListResponse = () => {
        let output = [];
        let data = this.state;
        for (let key in data) {
          if (this.state.hasOwnProperty(key)) {
            const value = this.state[key];
            output.push(
              <div className={classes.Category} key={value.id}>
                <MetadataField data={value} />
              </div>
            );
          }
        }
        return output;
      };
    render() {
        return (
          <div className={classes.CategoryList}>
          <CardDeck className={classes.CardDeck}>
              {this.CategoryListResponse()}
          </CardDeck>
      </div>
        );
      }
}


const mapStateToProps = (state) => {
    return {
      token: state.login.token,
    };
  };
  
  export default withRouter(connect(mapStateToProps, null)(MetadataFieldList));
  

