import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./store";
import App1 from "./Approach1/App";
import App2 from "./Approach2/App";
import "./styles.css";

const Apps = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <App1 />
        <App2 />
      </div>
    </BrowserRouter>
  </Provider>
);

render(<Apps />, document.getElementById("root"));
