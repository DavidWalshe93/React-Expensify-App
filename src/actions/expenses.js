// Created by David Walshe on 25/02/2020

import {v4 as uuid} from "uuid";

export const addExpense = (
    {
        description = "",
        note = "",
        amount = 0,
        createdAt = 0
    }) => ({
    type: "ADD_EXPENSE",
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

export const removeExpense = (
    {
        id = 0
    }) => ({
        type: "REMOVE_EXPENSE",
        expense: {
            id
        }
    }
);

export const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates,
});

