import React, { Component } from "react";

export default class InputCustom extends Component {
  render() {
    return (
      <div
        className={
          this.props.itemClass ? this.props.itemClass : "form-group col-md-4"
        }
      >
        <label htmlFor="exampleInputPassword1">{this.props.label}</label>
        <input {...this.props} />
      </div>
    );
  }
}
