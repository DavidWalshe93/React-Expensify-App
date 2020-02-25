// Created by David Walshe on 25/02/2020

import React from "react";
import {connect} from "react-redux"
import {removeExpense} from "../actions/expenses"

const ExpenseListItem = ({dispatch, id, description, amount, createdAt}) => (
    <>
        <h3>Expense Item</h3>
        <p>Desc: {description}</p>
        <p>Amount: {amount}</p>
        <p>Created At: {createdAt}</p>
        <button onClick={() => {
            dispatch(removeExpense({id: id}))
        }}>Remove
        </button>
    </>
);

export default connect()(ExpenseListItem);