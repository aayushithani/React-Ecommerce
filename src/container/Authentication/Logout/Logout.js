import React, { Component } from 'react';
import { Link } from 'react-router-dom'


export class Logout extends Component {
    render() {
        return (
            <div>
                <h1>User Logged Out!</h1>
                <Link to="/login">Logout</Link>
            </div>
        )
    }
}

export default Logout
