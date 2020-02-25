import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from "react-router-dom";


const ExpenseDashboardPage = () => (
    <>
        This is my dashboard component
    </>
);

const AddExpensePage = () => (
    <>
        This is my add expense page
    </>
);

const EditExpensePage = () => (
    <>
        This is my edit expense page
    </>
);

const HelpPage = () => (
    <>
        This is my help page
    </>
);

const routes = (
    <Router>
        <>
            <Route path={"/"} component={ExpenseDashboardPage} exact={true}/>
            <Route path={"/create"} component={AddExpensePage}/>
            <Route path={"/edit"} component={EditExpensePage}/>
            <Route path={"/help"} component={HelpPage}/>
        </>
    </Router>
);

ReactDOM.render(routes, document.getElementById('root'));

