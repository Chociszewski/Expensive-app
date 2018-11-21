import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import DashBoard from "../components/DashBoard.jsx";
import AddExpensePage from "../components/AddPage.jsx";
import EditExpensePage from "../components/EditPage.jsx";
import HelpPage from "../components/HelpPage.jsx";
import NotFoundPage from "../components/404.jsx";
import Header from "../components/Header.jsx";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={DashBoard} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);
export default AppRouter;
