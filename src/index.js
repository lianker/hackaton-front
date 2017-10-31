import React from "react";
import ReactDOM from "react-dom";
import "./css/normalize.css";
import "./css/skeleton.css";
import App from "./App";
import Lead from "./Lead";
import Home from "./Home";
import { Router, Route, browserHistory, IndexRoute } from "react-router";

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/leads" component={Lead} />
    </Route>
  </Router>,
  document.getElementById("root")
);
