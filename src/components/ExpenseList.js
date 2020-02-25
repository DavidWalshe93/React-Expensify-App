// Created by David Walshe on 25/02/2020

import React from "react";
import {connect} from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses"

// Base Component
const ExpenseList = (props) => (
    <>
        <h1>Expense List</h1>
        {props.expenses.map((expense) => (
            <ExpenseListItem key={expense.id} {...expense}/>
        ))}
    </>
);

// Redux state mapping
const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters),
    };
};

// Higher Order Component
export default connect(mapStateToProps)(ExpenseList);
