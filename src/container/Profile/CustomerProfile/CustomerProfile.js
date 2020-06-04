import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import classes from "../Profile.module.css";
import CustomerDetails from "./CustomerDetails/CustomerDetails"
import Address from "./CustomerAddressList/CustomerAddressList"
import UserPassword from '../UserPassword/UserPassword';
import AddAddress from './AddAddress/AddAddress';

class Profile extends Component {

  state = {
    isActive: "CustomerDetails"
  }

  render() {
    return (
      <div className={classes.Profile}>
        <Container>
          <h4> Hello UserName!</h4>
          <Row className={classes.Row}>
            <Col sm={4} className={classes.Col}>
              <div>
                <button type="submit" onClick={() => {this.setState({...this.state,isActive:"CustomerDetails"})}}>User Details</button>
                <button type="submit" onClick={() => {this.setState({...this.state,isActive:"address"})}}>User Address</button>
                <button type="submit" onClick={() => {this.setState({...this.state,isActive:"userPassword"})}}>Update Password</button>
                <button type="submit" onClick={() => {this.setState({...this.state,isActive:"addAddress"})}}>Add Address</button>
              </div>
            </Col>
            <Col sm={8} className={classes.Col}>
              {this.state.isActive==="CustomerDetails" && <CustomerDetails/>}
              {this.state.isActive==="address" && <Address/>}
              {this.state.isActive==="userPassword" && <UserPassword/>}
              {this.state.isActive==="addAddress" && <AddAddress/>}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Profile;
