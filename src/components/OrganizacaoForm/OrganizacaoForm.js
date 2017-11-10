import React from "react";
import Input from "../../_common/components/Input/Input";
import Select from "../../_common/components/Select/Select";
import Button from "../../_common/components/Button/Button";
import Row from "../../_common/components/Row/Row";

const LeadForm = ({ getFieldChanges, mercados }) => (
  <div>
    <Row>
      <Input
        label="Nome"
        type="text"
        id="organizacaoNome"
        divWrapperClass="six columns"
        inputClass="u-full-width"
        placeholder="Acme S.A."
        onChange={e => getFieldChanges("organizacaoNome", e)}
      />

      <Input
        label="CNPJ"
        type="text"
        id="organizacaoCnpj"
        divWrapperClass="six columns"
        inputClass="u-full-width"
        placeholder="XXXXXXXXXXX"
        onChange={e => getFieldChanges("organizacaoCnpj", e)}
      />
    </Row>
    <Row>
      <Input
        label="Quantidade de Funcionários"
        type="number"
        id="organizacaoNumFuncionarios"
        divWrapperClass="six columns"
        inputClass="u-full-width"
        placeholder="12"
        onChange={e => getFieldChanges("organizacaoNumFuncionarios", e)}
      />

      <Select
        elementos={mercados}
        name="organizacaoMercado"
        label="Mercado"
        divWrapperClass="six columns"
        inputClass="u-full-width"
        id="organizacaoMercado"
        onChange={e => getFieldChanges("organizacaoMercado", e)}
      />
    </Row>
  </div>
);

export default LeadForm;
