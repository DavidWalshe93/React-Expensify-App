// Created by David Walshe on 25/02/2020


import {NavLink} from "react-router-dom";
import React from "react";

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to={"/"} activeClassName={"is-active"} exact={true}>Home</NavLink>
        <NavLink to={"/create"} activeClassName={"is-active"}>Create Expense</NavLink>
        <NavLink to={"/help"} activeClassName={"is-active"}>Help</NavLink>
    </header>
);

export default Header;