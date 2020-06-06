import React, { Component } from 'react'
import classes from '../../Profile/Profile.module.css';
import { Container, Row, Col } from "react-bootstrap";
import RegisteredCustomers from './RegisteredCustomers/RegisteredCustomersList';
import RegisteredSellers from './RegisteredSellers/RegisteredSellersList';

export class AdminProfile extends Component {
    state = {
        isActive: "RegisteredCustomers"
      }

    render() {
        return (
           <div className={classes.Profile}>
        <Container>
          <h4> Hello Admin!</h4>
          <Row className={classes.Row}>
            <Col sm={4} className={classes.Col}>
              <div>
                <button type="submit" onClick={() => {this.setState({...this.state,isActive:"RegisteredCustomers"})}}>Registered Customers</button>
                <button type="submit" onClick={() => {this.setState({...this.state,isActive:"RegisteredSellers"})}}>Registered Sellers</button>
              </div>
            </Col>
            <Col sm={8} className={classes.Col}>
              {this.state.isActive==="RegisteredCustomers" && <RegisteredCustomers/>}
              {this.state.isActive==="RegisteredSellers" && <RegisteredSellers/>}
            </Col>
          </Row>
        </Container>
      </div>
        )
    }
}

export default AdminProfile
