import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import FilterBar from "./components/AccountClassification/FilterBar";
import SideNav from "./components/AccountClassification/SideNav";
import AddRecord from "./components/AccountClassification/AddRecord";
import ModRecord from "./components/AccountClassification/ModRecord";
import DelRecord from "./components/AccountClassification/DelRecord";
import ViewList from "./components/AccountClassification/ViewList";

export default function Home() {
  return (
    <div className="Home">
      <Router basename="/react-spa/home">
        <Route
          path="/"
          render={(routeProps) => (
            <>
              <SideNav {...routeProps} />
            </>
          )}
        />
        <Route
          path="/view"
          render={(routeProps) => (
            <>
              <div className="right_div">
                <FilterBar {...routeProps} />
                <ViewList {...routeProps} />
              </div>
            </>
          )}
        />
        <Route
          path="/add"
          render={(routeProps) => (
            <>
              <div className="right_div">
                <AddRecord {...routeProps} />
              </div>
            </>
          )}
        />
        <Route
          path="/modify"
          render={(routeProps) => (
            <>
              <div className="right_div">
                <ModRecord {...routeProps} />
              </div>
            </>
          )}
        />
        <Route
          path="/delete"
          render={(routeProps) => (
            <>
              <div className="right_div">
                <DelRecord {...routeProps} />
              </div>
            </>
          )}
        />
      </Router>

      {/* <Router basename="/react-spa/home">
        
      </Router> */}
    </div>
  );
}
