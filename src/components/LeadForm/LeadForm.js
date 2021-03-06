import React from "react";
import Input from "../../_common/components/Input/Input";
import Select from "../../_common/components/Select/Select";
import Button from "../../_common/components/Button/Button";
import DatePicker from "../../_common/components/DatePicker/DatePicker";
import Row from "../../_common/components/Row/Row";

const LeadForm = ({ getFieldChanges, origens, enviar }) => (
  <div>
    <Row>
      <Input
        label="Nome"
        type="text"
        id="leadNome"
        divWrapperClass="six columns"
        inputClass="u-full-width"
        placeholder="Bruce"
        onChange={e => getFieldChanges("leadNome", e)}
      />

      <Input
        label="Sobrenome"
        type="text"
        id="leadSobrenome"
        divWrapperClass="six columns"
        inputClass="u-full-width"
        placeholder="Wayne"
        onChange={e => getFieldChanges("leadSobrenome", e)}
      />
    </Row>

    <Row>
      <Input
        label="E-Mail"
        type="email"
        id="leadEmail"
        divWrapperClass="six columns"
        inputClass="u-full-width"
        placeholder="batman@gothan.com"
        onChange={e => getFieldChanges("leadEmail", e)}
      />

      <Input
        label="Cargo"
        type="text"
        id="leadCargo"
        divWrapperClass="six columns"
        inputClass="u-full-width"
        placeholder="Herói"
        onChange={e => getFieldChanges("leadCargo", e)}
      />
    </Row>

    <Row>
      <DatePicker
        label="Data de Nascimento"
        type="date"
        id="leadNascimento"
        divWrapperClass="six columns"
        inputClass="u-full-width dtpicker"
        placeholder="01/01/1987"
        onChange={e => getFieldChanges("leadNascimento", e)}
      />

      <Select
        elementos={origens}
        name="leadOrigem"
        label="Origem"
        divWrapperClass="six columns"
        inputClass="u-full-width"
        id="leadOrigem"
        onChange={e => getFieldChanges("leadOrigem", e)}
      />
    </Row>

    <Row>
      <div className="checkbox-align six columns">
        <label>
          <input
            type="checkbox"
            id="leadDecisor"
            name="leadDecisor"
            onChange={e => getFieldChanges("leadDecisor", e)}
          />
          <span className="label-body">Decisor</span>
        </label>
      </div>
    </Row>

    <Button label="Gravar" />
  </div>
);

export default LeadForm;
