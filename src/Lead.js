import React, { Component } from "react";
import InputCustom from "./components/InputCustom";
import SelectCustom from "./components/SelectCustom";
import BotaoSubmitCustom from "./components/BotaoSubmitCustom";

export default class Lead extends Component {
  constructor() {
    super();
    this.state = {
      tipoEmpresa: "",
      razaoSocial: "",
      nomeFantasia: "",
      cnpj: "",
      site: "",
      telefone1: "",
      telefone2: "",
      mercado: "",
      origem: "",
      subOrigem: "",
      endereco: "",
      numero: "",
      complemento: "",
      cep: "",
      estado: "",
      cidade: "",
      pais: ""
    };

    this.enviar = this.enviar.bind(this);
  }

  salvaAlteracao(nomeInput, evento) {
    const campo = {};
    campo[nomeInput] = evento.target.value;
    this.setState(campo);
  }

  tiposEmpresa = [
    { id: 0, nome: "Indústria" },
    { id: 1, nome: "comércio e varejo" },
    { id: 2, nome: "serviço terceirizado" },
    { id: 3, nome: "autônomo" },
    { id: 4, nome: "representação comercial" },
    { id: 5, nome: "instituição financeira" }
  ];

  mercados = [
    { id: 0, nome: "Tecnologia" },
    { id: 1, nome: "Engenharia" },
    { id: 2, nome: "Prestação de serviços" },
    { id: 3, nome: "Infra-Estrutura" },
    { id: 4, nome: "Saúde" },
    { id: 5, nome: "Educação" },
    { id: 6, nome: "Varejo" }
  ];

  origens = [{ id: 0, nome: "Eventos" }, { id: 1, nome: "Rede-Social" }];
  subOrigens = [{ id: 0, nome: "RD SUMIT" }, { id: 1, nome: "Facebook" }];
  paises = [{ id: 0, nome: "Brasil" }];

  enviar(event) {
    event.preventDefault();

    fetch("http://localhost:8080/api/autores", {
      headers: { "Content-Type": "application/json" },
      method: "post",
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(res => {
        // implementation
      });
  }

  render() {
    return (
      <div onSubmit={this.enviar} method="post">
        <form>
          <div className="panel panel-default">
            <div className="panel-heading">Cadastro</div>
            <div className="panel-body">
              <div className="panel panel-default">
                <div className="panel-heading">Dados da Empresa</div>
                <div className="panel-body">
                  <InputCustom
                    label="Razão Social"
                    type="text"
                    id="razaoSocial"
                    value={this.state.razaoSocial}
                    className="form-control"
                    placeholder="Razão Social"
                    onChange={this.salvaAlteracao.bind(this, "razaoSocial")}
                  />
                  <InputCustom
                    label="Nome Fantasa"
                    type="text"
                    id="nomeFantasia"
                    value={this.state.nomeFantasia}
                    className="form-control"
                    placeholder="Coca-Cola"
                    onChange={this.salvaAlteracao.bind(this, "nomeFantasia")}
                  />
                  <InputCustom
                    label="CNPJ"
                    type="text"
                    id="cnpj"
                    value={this.state.cnpj}
                    className="form-control"
                    placeholder="XXXXXXXXXXX"
                    onChange={this.salvaAlteracao.bind(this, "cnpj")}
                  />

                  <InputCustom
                    label="Site"
                    type="text"
                    id="site"
                    value={this.state.site}
                    className="form-control"
                    placeholder="http://www.pqp.com.br"
                    onChange={this.salvaAlteracao.bind(this, "site")}
                  />

                  <InputCustom
                    label="Telefone 01"
                    type="text"
                    id="telefone1"
                    value={this.state.telefone1}
                    className="form-control"
                    placeholder="99 9999-9999"
                    onChange={this.salvaAlteracao.bind(this, "telefone1")}
                  />

                  <InputCustom
                    label="Telefone 02"
                    type="text"
                    id="telefone2"
                    value={this.state.telefone2}
                    className="form-control"
                    placeholder="99 9999-9999"
                    onChange={this.salvaAlteracao.bind(this, "telefone2")}
                  />

                  <SelectCustom
                    elementos={this.mercados}
                    name="mercado"
                    label="Mercado"
                    id="mercado"
                    value={this.state.mercado}
                    onChange={this.salvaAlteracao.bind(this, "mercado")}
                  />

                  <SelectCustom
                    elementos={this.origens}
                    name="origens"
                    label="Origem"
                    id="origem"
                    value={this.state.origem}
                    onChange={this.salvaAlteracao.bind(this, "origem")}
                  />

                  <SelectCustom
                    elementos={this.subOrigens}
                    name="subOrigem"
                    label="Sub-Origem"
                    id="subOrigem"
                    value={this.state.subOrigem}
                    onChange={this.salvaAlteracao.bind(this, "subOrigem")}
                  />

                  <SelectCustom
                    elementos={this.tiposEmpresa}
                    name="tipoEmpresa"
                    label="Tipo Empresa"
                    id="tipoEmpresa"
                    value={this.state.tipoEmpresa}
                    onChange={this.salvaAlteracao.bind(this, "tipoEmpresa")}
                  />

                  <InputCustom
                    label="Endereço"
                    type="text"
                    id="endereco"
                    value={this.state.endereco}
                    className="form-control"
                    itemClass="form-group col-md-8"
                    placeholder="Rua do inferno"
                    onChange={this.salvaAlteracao.bind(this, "endereco")}
                  />

                  <InputCustom
                    label="Número"
                    type="text"
                    id="numero"
                    value={this.state.numero}
                    className="form-control"
                    placeholder="numero"
                    onChange={this.salvaAlteracao.bind(this, "numero")}
                  />

                  <InputCustom
                    label="Complemento"
                    type="text"
                    id="complemento"
                    value={this.state.complemento}
                    className="form-control"
                    placeholder="Perto da casa do c**"
                    onChange={this.salvaAlteracao.bind(this, "complemento")}
                  />

                  <InputCustom
                    label="CEP"
                    type="text"
                    id="cep"
                    value={this.state.cep}
                    className="form-control"
                    placeholder="88040-320"
                    onChange={this.salvaAlteracao.bind(this, "cep")}
                  />

                  <InputCustom
                    label="Estado"
                    type="text"
                    id="estado"
                    value={this.state.estado}
                    className="form-control"
                    placeholder="Rio de Janeiro"
                    onChange={this.salvaAlteracao.bind(this, "estado")}
                  />

                  <InputCustom
                    label="Cidade"
                    type="text"
                    id="cidade"
                    value={this.state.cidade}
                    className="form-control"
                    placeholder="Lodon"
                    onChange={this.salvaAlteracao.bind(this, "cidade")}
                  />

                  <SelectCustom
                    elementos={this.paises}
                    name="pais"
                    label="País"
                    id="pais"
                    value={this.state.pais}
                    onChange={this.salvaAlteracao.bind(this, "pais")}
                  />
                </div>
              </div>

              <div className="panel panel-default">
                <div className="panel-heading">Dados do Lead</div>
                <div className="panel-body" />
              </div>

              <div className="panel panel-default">
                <div className="panel-heading">Informações adicionais</div>
                <div className="panel-body" />
              </div>
            </div>
          </div>

          <BotaoSubmitCustom text="Gravar" />
        </form>
      </div>
    );
  }
}
