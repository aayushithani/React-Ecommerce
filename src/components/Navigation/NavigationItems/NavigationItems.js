import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavigationItems.module.css";

const Navigation = () => {
  return (
    <nav>
      <ul className={classes.NavigationItems}>
        <li className={classes.NavigationItem}>
          <NavLink to="/homePage">
            <svg
              class="bi bi-house-door-fill"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.5 10.995V14.5a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V11c0-.25-.25-.5-.5-.5H7c-.25 0-.5.25-.5.495z" />
              <path
                fill-rule="evenodd"
                d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
              />
            </svg>
          </NavLink>
        </li>
        <li className={classes.NavigationItem}>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li className={classes.NavigationItem}>
          <NavLink to="/signup">SignUp</NavLink>
        </li>
        <li className={classes.NavigationItem}>
          <NavLink to="/productList">List</NavLink>
        </li>
        <li className={classes.NavigationItem}>
          <NavLink to="/profile">
            <svg
              class="bi bi-person-circle"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
              <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              <path
                fill-rule="evenodd"
                d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"
              />
            </svg>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
