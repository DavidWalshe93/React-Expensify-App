// Created by David Walshe on 25/02/2020

import React from "react";
import {connect} from "react-redux";
import {setTextFilter} from "../actions/filters";

const ExpenseListFilters = (props) => (
    <>
        <input type={"text"} value={props.filters.text} onChange={(e) => {
            props.dispatch(setTextFilter(e.target.value));
            // console.log(e.target.value)
        }}/>
    </>
);

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
};

export default connect(mapStateToProps)(ExpenseListFilters);