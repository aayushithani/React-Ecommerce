import React from "react";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <div>
      <nav className={classes.Navbar}>
        <div>
          <NavigationItems/>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
