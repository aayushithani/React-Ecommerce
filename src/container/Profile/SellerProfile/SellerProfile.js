import React, { Component } from 'react'
import classes from '../../Profile/Profile.module.css'
import { Container, Row, Col } from "react-bootstrap";
import SellerDetails from './SellerDetails/SellerDetails';
import UserPassword from '../UserPassword/UserPassword';
import SellerAddress from '../SellerProfile/SellerAddress/SellerAddress';


class SellerProfile extends Component {
    state = {
        isActive: "SellerDetails"
      }

     render() {
    return (
      <div className={classes.Profile}>
        <Container>
          <h4> Hello UserName!</h4>
          <Row className={classes.Row}>
            <Col sm={4} className={classes.Col}>
              <div>
                <button type="submit" onClick={() => {this.setState({...this.state,isActive:"SellerDetails"})}}>User Details</button>
                <button type="submit" onClick={() => {this.setState({...this.state,isActive:"SellerAddress"})}}>User Address</button>
                <button type="submit" onClick={() => {this.setState({...this.state,isActive:"userPassword"})}}>Update Password</button>
              </div>
            </Col>
            <Col sm={8} className={classes.Col}>
              {this.state.isActive==="SellerDetails" && <SellerDetails/>}
              {this.state.isActive==="userPassword" && <UserPassword/>}
              {this.state.isActive==="SellerAddress" && <SellerAddress/>}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default SellerProfile
