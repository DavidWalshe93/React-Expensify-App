// Created by David Walshe on 25/02/2020

import {combineReducers, createStore} from "redux";
import expensesReducer from "../reducers/expenses";
import filterReducer from "../reducers/filters";

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filterReducer
        })
    );

    return store;
}