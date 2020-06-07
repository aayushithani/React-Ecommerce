import React, { Component } from "react";
import classes from "../../Profile/Profile.module.css";
import { Container, Row, Col } from "react-bootstrap";
import CategoryList from "./CategoryList/CategoryList";
import AddCategory from "./AddCategory/AddCategory";
import MetadataFieldList from "./MetadataField/MetadataFieldList";
import AddMetadataField from "./MetadataField/AddMetadataField";
import AddMetadataFieldValues from "./MetadataField/AddMetadataFieldValues";
import MetadataFieldValuesList from "./MetadataField/MetadataFieldValuesList";

export class Category extends Component {
  state = {
    isActive: "CategoryList",
  };

  render() {
    return (
      <div className={classes.Profile}>
        <Container>
          <h4> Hello Admin!</h4>
          <Row>
            <Col>
              <button
                type="submit"
                onClick={() => {
                  this.setState({ ...this.state, isActive: "CategoryList" });
                }}
              >
                CategoryList
              </button>
            </Col>
            <Col>
              <button
                type="submit"
                onClick={() => {
                  this.setState({
                    ...this.state,
                    isActive: "MetadataFieldList",
                  });
                }}
              >
                MetadataFieldList
              </button>
            </Col>
            <Col>
              <button
                type="submit"
                onClick={() => {
                  this.setState({
                    ...this.state,
                    isActive: "MetadataFieldValuesList",
                  });
                }}
              >
                MetadataFieldValuesList
              </button>
            </Col>
          </Row>
          <Row>
            <Col>
              <button
                type="submit"
                onClick={() => {
                  this.setState({ ...this.state, isActive: "AddCategory" });
                }}
              >
                AddCategory
              </button>
            </Col>
            <Col>
              <button
                type="submit"
                onClick={() => {
                  this.setState({
                    ...this.state,
                    isActive: "AddMetadataField",
                  });
                }}
              >
                AddMetadataField
              </button>
            </Col>
            <Col>
              <button
                type="submit"
                onClick={() => {
                  this.setState({
                    ...this.state,
                    isActive: "AddMetadataFieldValues",
                  });
                }}
              >
                AddMetadataFieldValues
              </button>
            </Col>
          </Row>
        </Container>
        <Row className={classes.Row}>
          <Col sm={12} className={classes.Col}>
            {this.state.isActive === "CategoryList" && <CategoryList />}
            {this.state.isActive === "AddCategory" && <AddCategory />}
            {this.state.isActive === "MetadataFieldList" && (
              <MetadataFieldList />
            )}
            {this.state.isActive === "AddMetadataField" && <AddMetadataField />}
            {this.state.isActive === "AddMetadataFieldValues" && (
              <AddMetadataFieldValues />
            )}
            {this.state.isActive === "MetadataFieldValuesList" && (
              <MetadataFieldValuesList />
            )}
          </Col>
        </Row>
      </div>
    );
  }
}

export default Category;
