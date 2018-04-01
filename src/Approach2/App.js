import React from "react";
import { connect } from "react-redux";
import { Switch, Route, NavLink } from "react-router-dom";
import { ThroughProvider } from "react-through";
import { Breadcrumbs, BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import {
  HomePage,
  ConnectedList,
  Details,
  mapStateToDetailsProps
} from "../PageComponents";

const ExtendedDetails = props => (
  <React.Fragment>
    <BreadcrumbsItem to={`/items/${props.match.params.id}`}>
      {props.item}
    </BreadcrumbsItem>
    <Details {...props} />
  </React.Fragment>
);

const ConnectedExtendedDetails = connect(mapStateToDetailsProps)(
  ExtendedDetails
);

const FruitsPages = () => (
  <React.Fragment>
    <BreadcrumbsItem to="/items">Fruits</BreadcrumbsItem>
    <Switch>
      <Route exact path="/items" component={ConnectedList} />
      <Route exact path="/items/:id" component={ConnectedExtendedDetails} />
    </Switch>
  </React.Fragment>
);

const App2 = () => (
  <ThroughProvider>
    <div>
      <h2 className="title">Approach 2</h2>
      <Breadcrumbs separator={" / "} item={NavLink} finalItem="span" />
      <BreadcrumbsItem to="/">Home</BreadcrumbsItem>
      <Route exact path="/" component={HomePage} />
      <Route path="/items" component={FruitsPages} />
    </div>
  </ThroughProvider>
);

export default App2;
