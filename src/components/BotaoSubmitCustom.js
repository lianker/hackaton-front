import React, { Component } from "react";

export default class BotaoSubmitCustom extends Component {
  render() {
    return (
      <div className="form-group">
        <button type="submit" className="btn btn-success">
          {this.props.text}
        </button>
      </div>
    );
  }
}
