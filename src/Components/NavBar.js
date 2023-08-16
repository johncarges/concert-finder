import React from "react";
import { ReactDOM } from "react";
import { NavLink, Switch } from "react-router-dom";

function NavBar() {
    return (
        <div className="nav-bar-container">
            <div className="nav-bar">
                <NavLink to="/" exact activeStyle={{textDecoration: "underline"}} className="nav-link"> Find Concerts </NavLink>
                <NavLink to="/my-concerts" exact activeStyle={{textDecoration: "underline"}} className="nav-link"> My Concerts </NavLink>
            </div>
        </div>
    )
}

export default NavBar;