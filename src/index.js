import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux"
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import {addExpense} from "./actions/expenses";
import "./styles/styles.scss"

const store = configureStore();

store.dispatch(addExpense({description: "Water Bill", amount: 4500}));
store.dispatch(addExpense({description: "Gas BIll", createdAt: 1000}));
store.dispatch(addExpense({description: "Rent BIll", amount: 109500}));

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
