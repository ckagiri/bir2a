import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import withBreadcrumbs from "react-router-breadcrumbs-hoc";

// breadcrumbs can be any type of component or string
const FruitBreadcrumb = ({ item }) => item;

const ConnectedFruitBreadcrumb = connect(({ items }, { match }) => ({
  item: items[match.params.id]
}))(FruitBreadcrumb);

// define some custom breadcrumbs for certain routes (optional)
const routes = [
  { path: "/", breadcrumb: "Home" },
  { path: "/items", breadcrumb: "Fruits" },
  { path: "/items/:id", breadcrumb: ConnectedFruitBreadcrumb }
];

// map & render your breadcrumb components however you want.
// each `breadcrumb` has the props `key`, `location`, and `match` included!
const Breadcrumbs = ({ breadcrumbs }) => (
  <div>
    {breadcrumbs.map((breadcrumb, index) => (
      <span key={breadcrumb.props.key}>
        {index < breadcrumbs.length - 1 ? (
          <NavLink to={breadcrumb.props.match.url}>{breadcrumb}</NavLink>
        ) : (
          <span>{breadcrumb}</span>
        )}
        {index < breadcrumbs.length - 1 && <i> / </i>}
      </span>
    ))}
  </div>
);

export default withBreadcrumbs(routes)(Breadcrumbs);
