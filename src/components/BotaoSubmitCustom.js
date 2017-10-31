import React, { Component } from "react";

export default class BotaoSubmitCustom extends Component {
  render() {
    return (
      <input className="button-primary" type="submit" value={this.props.text} />
    );
  }
}
