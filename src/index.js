import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import RouteHandler from "./components/RouteHandler";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <RouteHandler />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
