import React from "react";
import { NavLink } from "react-router-dom";

import * as routes from "../constants/routes";

const NavBar = ({ currentUser }) => (
  <div>
    <h5>NAVBAR</h5>
    <NavLink
      exact
      className="navLink"
      activeClassName="selected"
      to={routes.ROOT}
    >
      ROOT
    </NavLink>
    <NavLink to={routes.HOME} className="navLink" activeClassName="selected">
      HOME{" "}
    </NavLink>
    <NavLink to={routes.USERS} className="navLink" activeClassName="selected">
      USERS{" "}
    </NavLink>
    <NavLink to={routes.POSTS} className="navLink" activeClassName="selected">
      POSTS{" "}
    </NavLink>
    <NavLink to={routes.SEARCH} className="navLink" activeClassName="selected">
      SEARCH
    </NavLink>
    <NavLink to={routes.SIGNUP} className="navLink" activeClassName="selected">
      SIGNUP
    </NavLink>

    {currentUser ? (
      <span>hello {currentUser.username}</span>
    ) : (
      [
        <NavLink key={1} to={routes.REGISTER} activeClassName="selected">
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
      ]
    )}
  </div>
);

export default NavBar;
