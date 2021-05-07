import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Customers from "./Customers";
import Loans from "./Loans";
import companyLogo from "./usda.png";

function App() {
  return (
    <div>
      <img src={companyLogo} alt="USDA logo" />
      <ul className="header">
        <li>
          <NavLink exact to="/react-spa/home" id="homelink">
            Account Classification
          </NavLink>
        </li>
        <li>
          <NavLink to="/react-spa/customers" id="customerslink">
            Customers
          </NavLink>
        </li>
        <li>
          <NavLink to="/react-spa/loans" id="loanslink">
            Loans
          </NavLink>
        </li>
      </ul>

      <Switch>
        <Route exact path="/react-spa/home">
          <Home />
        </Route>
        <Route path="/react-spa/customers">
          <Customers />
        </Route>
        <Route path="/react-spa/loans">
          <Loans />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
