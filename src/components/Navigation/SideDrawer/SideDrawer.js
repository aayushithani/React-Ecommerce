import React from "react";

import Logo from "../../Logo/Logo";
import classes from "./SideDrawer.module.css";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../Backdrop/Backdrop";

const SideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <div >
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")} onClick={props.closed}>
        <div className={classes.Logo}  style={{marginLeft:"25px"}}>
          <Logo />
        </div>
        <nav style={{marginLeft:"0px"}}>
          <NavigationItems />
        </nav>
      </div>
    </div>
  );
};

export default SideDrawer;
