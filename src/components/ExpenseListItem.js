// Created by David Walshe on 25/02/2020

import React from "react";
import {connect} from "react-redux"

const ExpenseListItem = (props) => (
    <>
        <h3>Expense Item</h3>
        <p>Desc: {props.expense.description}</p>
        <p>Amount: {props.expense.amount}</p>
        <p>Created At: {props.expense.createdAt}</p>
    </>
);

// Redux state mapping
const mapStateToProps = (state) => {
    return {
        expenses: state.expense
    }
};

export default connect(mapStateToProps)(ExpenseListItem);