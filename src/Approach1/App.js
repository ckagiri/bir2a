import React from "react";
import { Route } from "react-router-dom";
import { HomePage, ConnectedList, ConnectedDetails } from "../PageComponents";
import Breadcrumbs from "./Breadcrumbs";

const App1 = () => (
  <div className="app">
    <h2 className="title">Approach 1</h2>
    <Breadcrumbs />
    <Route exact path="/" component={HomePage} />
    <Route exact path="/items" component={ConnectedList} />
    <Route exact path="/items/:id" component={ConnectedDetails} />
  </div>
);

export default App1;
