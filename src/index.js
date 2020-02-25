import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, NavLink, Route, Switch} from "react-router-dom";
import "./styles/styles.scss"


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

const NotFoundPage = () => (
    <>
        Page not found. <Link to={"/"}>Go to Home</Link>
    </>
);

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to={"/"} activeClassName={"is-active"} exact={true}>Home</NavLink>
        <NavLink to={"/create"} activeClassName={"is-active"}>Create Expense</NavLink>
        <NavLink to={"/edit"} activeClassName={"is-active"}>Edit Expense</NavLink>
        <NavLink to={"/help"} activeClassName={"is-active"}>Help</NavLink>
    </header>
);

const routes = (
    <Router>
        <>
            <Header/>
            {/*Switch attempts to match any route in order*/}
            <Switch>
                <Route path={"/"} component={ExpenseDashboardPage} exact={true}/>
                <Route path={"/create"} component={AddExpensePage}/>
                <Route path={"/edit"} component={EditExpensePage}/>
                <Route path={"/help"} component={HelpPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </>
    </Router>
);

ReactDOM.render(routes, document.getElementById('root'));

