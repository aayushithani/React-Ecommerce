import React from 'react';
import logo from '../../assets/images/logo.png'
import classes from './Logo.module.css'

 const Logo = () => {
    return (
        <div className={classes.Logo}>
            <img src={logo} alt="Logo"/>
        </div>
    )
}


export default Logo;