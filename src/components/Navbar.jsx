import React from "react";
import { NavLink, Link } from "react-router-dom";
import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div>
        <span className="navButton" id="homeNav">
          <NavLink
            data-dd-action-name="home-nav-link"
            activeClassName="selected"
            activeStyle={{ textDecoration: "none" }}
            to="/"
          >
            <NavItem nom="albert"/>
          </NavLink>
        </span>
      </div>
    </nav>
  );
};
export default Navbar;
