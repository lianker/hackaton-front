import React, { Component } from "react";

export default class SelectCustom extends Component {
  render() {
    return (
      <div className="form-group col-md-4">
        <label htmlFor={this.props.id}>{this.props.label}</label>

        <select className="form-control" {...this.props}>
          <option value="">Selecione...</option>

          {this.props.elementos.map(elemento => {
            return (
              <option key={elemento.id} value={elemento.nome}>
                {elemento.nome}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}
