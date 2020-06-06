import React, { Component } from 'react'
import classes from '../../Profile/Profile.module.css';
import { Container, Row, Col } from "react-bootstrap";
import CategoryList from './CategoryList/CategoryList';
import AddCategory from './AddCategory/AddCategory';

export class Category extends Component {
    state = {
        isActive: "CategoryList"
      }

    render() {
        return (
           <div className={classes.Profile}>
        <Container>
          <h4> Hello Admin!</h4>
          <Row className={classes.Row}>
            <Col sm={4} className={classes.Col}>
              <div>
                <button type="submit" onClick={() => {this.setState({...this.state,isActive:"CategoryList"})}}>CategoryList</button>
                <button type="submit" onClick={() => {this.setState({...this.state,isActive:"AddCategory"})}}>AddCategory</button>
              </div>
            </Col>
            <Col sm={8} className={classes.Col}>
              {this.state.isActive==="CategoryList" && <CategoryList/>}
              {this.state.isActive==="AddCategory" && <AddCategory/>}
            </Col>
          </Row>
        </Container>
      </div>
        )
    }
}

export default Category;
