import React, { Component } from "react";
import Input from "./components/InputCustom";
import SelectCustom from "./components/SelectCustom";
import BotaoSubmitCustom from "./components/BotaoSubmitCustom";
import DatePicker from "./_common/DatePicker/DatePicker";
import axios from "axios";

export default class Lead extends Component {
  constructor() {
    super();

    this.state = {
      lead: {}
    };

    this.enviar = this.enviar.bind(this);
  }

  salvaAlteracao(nomeInput, evento) {
    const campo = {};
    let target = evento.target;
    campo[nomeInput] =
      target.type === "checkbox" ? target.checked : target.value;
    this.setState(campo);
  }

  origens = [
    { id: 0, nome: "RD Summit" },
    { id: 1, nome: "Facebook" },
    { id: 2, nome: "Linkedin" },
    { id: 3, nome: "Twitter" },
    { id: 4, nome: "E-mail" },
    { id: 5, nome: "Cold Call" }
  ];

  enviar(event) {
    event.preventDefault();

    // "Acces-Control-Allow-Origin": "*",
    const myApi = axios.create({
      timeout: 10000,
      withCredentials: true,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });

    myApi({
      method: "post",
      url: "https://secret-ridge-86550.herokuapp.com/api/leads",
      data: {
        nome: this.state.leadNome,
        sobrenome: this.state.leadSobrenome,
        email: this.state.leadEmail,
        nascimento: this.state.leadNascimento,
        cargo: this.state.leadCargo,
        origem: this.state.leadOrigem,
        decisor: this.state.leadDecisor
      }
    })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div onSubmit={this.enviar} method="post">
        <h5>Novo Lead</h5>
        <form>
          <div className="row">
            <Input
              label="Nome"
              type="text"
              id="leadNome"
              value={this.state.lead.nome}
              divWrapperClass="six columns"
              inputClass="u-full-width"
              placeholder="Bruce"
              onChange={this.salvaAlteracao.bind(this, "leadNome")}
            />

            <Input
              label="Sobrenome"
              type="text"
              id="leadSobrenome"
              value={this.state.lead.sobrenome}
              divWrapperClass="six columns"
              inputClass="u-full-width"
              placeholder="Wayne"
              onChange={this.salvaAlteracao.bind(this, "leadSobrenome")}
            />
          </div>

          <div className="row">
            <Input
              label="E-Mail"
              type="email"
              id="leadEmail"
              value={this.state.lead.email}
              divWrapperClass="six columns"
              inputClass="u-full-width"
              placeholder="batman@gothan.com"
              onChange={this.salvaAlteracao.bind(this, "leadEmail")}
            />

            <Input
              label="Cargo"
              type="text"
              id="leadCargo"
              value={this.state.lead.cargo}
              divWrapperClass="six columns"
              inputClass="u-full-width"
              placeholder="Herói"
              onChange={this.salvaAlteracao.bind(this, "leadCargo")}
            />
          </div>

          <div className="row">
            <DatePicker
              label="Data de Nascimento"
              type="date"
              id="leadNascimento"
              value={this.state.lead.dataNascimento}
              divWrapperClass="six columns"
              inputClass="u-full-width dtpicker"
              placeholder="01/01/1987"
              onChange={this.salvaAlteracao.bind(this, "leadNascimento")}
            />

            <SelectCustom
              elementos={this.origens}
              name="leadOrigem"
              label="Origem"
              divWrapperClass="six columns"
              inputClass="u-full-width"
              id="leadOrigem"
              value={this.state.lead.origem}
              onChange={this.salvaAlteracao.bind(this, "leadOrigem")}
            />
          </div>

          <div className="row">
            <div className="checkbox-align six columns">
              <label>
                <input
                  type="checkbox"
                  id="leadDecisor"
                  name="leadDecisor"
                  onChange={this.salvaAlteracao.bind(this, "leadDecisor")}
                />
                <span className="label-body">Decisor</span>
              </label>
            </div>
          </div>

          <BotaoSubmitCustom text="Gravar" />
        </form>
      </div>
    );
  }
}
