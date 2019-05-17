import React from "react";
import { NavLink } from "react-router-dom";

import "./AppNavbar.css";

import * as routes from "../constants/routes";

const NavBar = ({ currentUser, doLogoutCurrentUser }) => (
  <div className="navDiv">
    <NavLink to={routes.USERS} className="navLink" activeClassName="selected">
      USERS DASHBOARD
    </NavLink>
    <NavLink to={routes.POSTS} className="navLink" activeClassName="selected">
      SEARCH
    </NavLink>

    {currentUser
      ? [
          <NavLink to={"/edit"} activeClassName="selected" className="navLink">
            USER INFO
          </NavLink>,
          <NavLink onClick={doLogoutCurrentUser} className="navLink">
            LOGOUT
          </NavLink>
        ]
      : [
          <NavLink
            key={1}
            to={routes.REGISTER}
            activeClassName="selected"
            className="navLink"
          >
            REGISTER
          </NavLink>,
          <NavLink
            key={2}
            to={"/login"}
            className="navLink"
            activeClassName="selected"
          >
            LOGIN
          </NavLink>
        ]}
  </div>
);

export default NavBar;
