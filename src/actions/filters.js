// Created by David Walshe on 25/02/2020

export const setTextFilter = (text) => ({
    type: "SET_TEXT_FILTER",
    text: text
});

export const sortByDate = () => ({
    type: "SORT_BY_DATE",
    sortBy: "date"
});

export const sortByAmount = () => ({
    type: "SORT_BY_AMOUNT",
    sortBy: "amount"
});

export const setStartDate = (startDate = undefined) => ({
    type: "SET_START_DATE",
    startDate
});

export const setEndDate = (endDate = undefined) => ({
    type: "SET_END_DATE",
    endDate
});