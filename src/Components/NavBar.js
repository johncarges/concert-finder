import React from "react";
import { ReactDOM } from "react";
import { NavLink, Switch } from "react-router-dom";

function NavBar() {
    return (
        <div>
            <NavLink to="/" exact activeStyle={{textDecoration: "underline"}}> Find Concerts </NavLink>
            <NavLink to="/my-concerts" exact activeStyle={{textDecoration: "underline"}}> My Concerts </NavLink>
        </div>
    )
}

export default NavBar;