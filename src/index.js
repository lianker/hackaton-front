import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import "./css/normalize.css";
import "./css/skeleton.css";
import "./css/app.css";
import "./css/datepicker.css";
import App from "./components/App/App";
import LeadForm from "./components/LeadForm/LeadForm";
import Home from "./components/Home/Home";

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/leads" component={LeadForm} />
    </Route>
  </Router>,
  document.getElementById("root")
);
