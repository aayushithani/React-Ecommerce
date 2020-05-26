import React from 'react'
import SaleLogo from '../../assets/images/sale.gif';
import classes from './SaleBanner.module.css';

const SaleBanner = () => {
    return (
        <div className={classes.SaleBanner}>
            <img src={SaleLogo} alt="SaleLogo"></img>
        </div>
    )
}


export default SaleBanner;