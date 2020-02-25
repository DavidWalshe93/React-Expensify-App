// Created by David Walshe on 25/02/2020

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import React from "react";

import Header from "../components/Header";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";

const AppRouter = () => (
    <Router>
        <>
            <Header/>
            {/*Switch attempts to match any route in order*/}
            <Switch>
                <Route path={"/"} component={ExpenseDashboardPage} exact={true}/>
                <Route path={"/create"} component={AddExpensePage}/>
                <Route path={"/edit/:id"} component={EditExpensePage}/>
                <Route path={"/help"} component={HelpPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </>
    </Router>
);

export default AppRouter;