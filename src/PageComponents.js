import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export const HomePage = () => (
  <div>
    <h3>Home page</h3>
    Go to <Link to="/items">Fruits</Link>
  </div>
);

export const List = ({ items }) => (
  <div>
    <h3>Fruits page</h3>
    {Object.keys(items).map(key => (
      <div key={key}>
        <Link to={`/items/${key}`}>{items[key]}</Link>
      </div>
    ))}
  </div>
);

export const mapStateToListProps = ({ items }) => ({ items });
export const ConnectedList = connect(mapStateToListProps)(List);

export const Details = ({ item }) => (
  <div>
    <h3>This is {item} page</h3>
  </div>
);

export const mapStateToDetailsProps = ({ items }, { match }) => ({
  item: items[match.params.id]
});
export const ConnectedDetails = connect(mapStateToDetailsProps)(Details);
