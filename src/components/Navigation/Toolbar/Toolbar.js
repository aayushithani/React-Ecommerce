import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../../../components/Logo/Logo";
import Search from "../Search/Search";
import Navbar from "../Navbar/Navbar";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const Toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <DrawerToggle clicked={props.drawerToggleClicked} />
      <div className={classes.Logo}>
        <Logo />
      </div>
      <div>
        <Search />
      </div>
      <nav className={classes.DesktopOnly}>
        <Navbar />
      </nav>
   
    </header>
  );
};

export default Toolbar;
