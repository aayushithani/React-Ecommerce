import React, { Component } from "react";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import classes from "./Layout.module.css";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    console.log("Layout",this.props)
    return (
      <>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} {...this.props}/>

        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler} 
          {...this.props}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </>
    );
  }
}

export default Layout;