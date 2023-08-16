import React from "react";
import { ReactDOM } from "react";
import { NavLink, Switch } from "react-router-dom";

function NavBar() {
    return (
        <div className="nav-bar-container">
            <div className="nav-bar">
                <NavLink to="/" exact className="nav-link" id="home-nav-link">  <img className="home-icon" src="/homeLogo.png"/> </NavLink>
                <NavLink to="/find-concerts" exact className="nav-link"> Find Concerts </NavLink>
                <NavLink to="/my-concerts" exact  className="nav-link"> My Concerts </NavLink>
            </div>
        </div>
    )
}

export default NavBar;