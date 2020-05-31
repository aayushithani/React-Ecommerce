import React from "react";
import classes from "./HomePage.module.css";
import Slider from "./Slider/Slider";
import SaleBanner from "./SaleBanner/SaleBanner";
import Category from "./Category/Category";
import Footer from "../../components/Navigation/Footer/Footer";
// import ContactUs from "./ContactUs/ContactUs"

const HomePage = () => {
  return (
    <div className={classes.HomePage}>
      <Slider />
      <SaleBanner />
      <Category />
      {/* <ContactUs/> */}
      <Footer />
    </div>
  );
};

export default HomePage;
