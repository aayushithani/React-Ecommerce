import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import classes from "./Profile.module.css";
import UserDetails from "./ProfileToggle/UserDetails/UserDetails"
import Address from "./ProfileToggle/Address/Address";
import UserPassword from './ProfileToggle/UserPassword/UserPassword';

class Profile extends Component {

  state = {
    address:false,
    userDetails:true,
    userPassword:false
  }

  userDetailsHandler = () => {
    this.setState ({
      address: false,
      userDetails:true,
      userPassword:false
    })
  }

  userAddressHandler = () => {
    this.setState ({
      address: true,
      userDetails:false,
      userPassword:false
    })
  }

  userPasswordHandler = () => {
    this.setState ({
      address: false,
      userDetails:false,
      userPassword:true
    })
  }


  render() {
    return (
      <div className={classes.Profile}>
        <Container>
          <h4> Hello UserName!</h4>
          <Row className={classes.Row}>
            <Col sm={4} className={classes.Col}>
              <div>
                <button type="submit" onClick={this.userDetailsHandler}>User Details</button>
                <button type="submit" onClick={this.userAddressHandler}>Address</button>
                <button type="submit" onClick={this.userPasswordHandler}>Update Password</button>
              </div>
            </Col>
            <Col sm={8} className={classes.Col}>
              {this.state.userDetails && <UserDetails/>}
              {this.state.address && <Address/>}
              {this.state.userPassword && <UserPassword/>}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Profile;
