import React from "react";
import classes from "./HomePage.module.css";
import Slider from "./Slider/Slider";
import SaleBanner from "./SaleBanner/SaleBanner";
import Category from "./Category/Category";
import Footer from '../Navigation/Footer/Footer'

const HomePage = () => {
  return (
    <div className={classes.HomePage}>
      <Slider />
      <SaleBanner />
      <Category/>
      <Footer/>
    </div>
  );
};

export default HomePage;
