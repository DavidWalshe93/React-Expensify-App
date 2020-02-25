// Created by David Walshe on 25/02/2020

import React from "react";
import {connect} from "react-redux";

// Base Component
const ExpenseList = (props) => (
    <>
        <h1>Expense List</h1>
        {props.filters.text}
        {props.expenses.length}
    </>
);

// Redux state mapping
const mapStateToProps = (state) => {
    return {
        expenses: state.expenses,
        filters: state.filters
    };
};

// Higher Order Component
export default connect(mapStateToProps)(ExpenseList);
