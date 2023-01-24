import React from "react";

import classes from "./Navigation.module.css";

import { NavLink } from "react-router-dom";

const Navigation = (props) => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? classes.activelink : "")}
            to="/quotes"
          >
            Quotes
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) => (isActive ? classes.activelink : "")}
            to="/newQuotes"
          >
            New Qoute
          </NavLink>
        </li>

        <li>
          <button onClick={props.onLogout}>Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
