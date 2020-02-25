// Created by David Walshe on 25/02/2020

import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";

const ExpenseDashboardPage = () => (
    <>
        <ExpenseListFilters/>
        <ExpenseList/>
    </>
);


export default ExpenseDashboardPage;
