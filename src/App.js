import React, { Component } from "react";
import logo from "./logo.svg";
// import "./App.css";
// import "./bootstrap.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container" id="main">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
