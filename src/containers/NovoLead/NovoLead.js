import React from "react";
import LeadForm from "../../components/LeadForm/LeadForm";
import OrganizacaoForm from "../../components/OrganizacaoForm/OrganizacaoForm";
import { enviaLead } from "../../services/leadService";

export default class extends React.Component {
  constructor() {
    super();

    this.state = {
      lead: {}
    };
  }

  getFieldChanges = (nomeInput, evento) => {
    const campo = {};
    let target = evento.target;
    campo[nomeInput] =
      target.type === "checkbox" ? target.checked : target.value;
    this.setState(campo);
  };

  enviar = event => {
    event.preventDefault();

    const lead = {
      nome: this.state.leadNome,
      sobrenome: this.state.leadSobrenome,
      email: this.state.leadEmail,
      nascimento: this.state.leadNascimento,
      cargo: this.state.leadCargo,
      origem: this.state.leadOrigem,
      decisor: this.state.leadDecisor
    };

    enviaLead(lead);
  };

  origens = [
    { id: 0, nome: "RD Summit" },
    { id: 1, nome: "Facebook" },
    { id: 2, nome: "Linkedin" },
    { id: 3, nome: "Twitter" },
    { id: 4, nome: "E-mail" },
    { id: 5, nome: "Cold Call" }
  ];

  mercados = [{ id: 0, nome: "Comércio e serviços" }];

  render() {
    return (
      <div onSubmit={this.enviar} method="post">
        <form>
          <h5>Novo Lead</h5>

          <LeadForm
            origens={this.origens}
            getFieldChanges={this.getFieldChanges}
          />

          <h5>Organizacao</h5>
          <OrganizacaoForm
            mercados={this.mercados}
            getFieldChanges={this.getFieldChanges}
          />
        </form>
      </div>
    );
  }
}
