import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux"
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import {addExpense} from "./actions/expenses";
import {setTextFilter} from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "./styles/styles.scss"

const store = configureStore();

store.dispatch(addExpense({
    description: "Water Bill",
}));

store.dispatch(addExpense({
    description: "Gas BIll",
}));

store.dispatch(setTextFilter("water"));

console.log(getVisibleExpenses(store.getState().expenses, store.getState().filters));

setTimeout(() => {
    store.dispatch(setTextFilter("bill"));
}, 3000);

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
