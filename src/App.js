import React, { Component } from "react";
import Menu from "./components/Menu/Menu";
import "./css/app.css";
import "./css/datepicker.css";

class App extends Component {
  render() {
    return (
      <div className="container" id="main">
        <Menu />
        <div className="content-container">{this.props.children}</div>
      </div>
    );
  }
}

export default App;
