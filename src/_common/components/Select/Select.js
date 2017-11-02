import React from "react";

const Select = ({
  elementos,
  id,
  label,
  inputClass,
  divWrapperClass,
  ...rest
}) => (
  <div className={divWrapperClass}>
    <label htmlFor={id}>{label}</label>
    <select className={inputClass} id={id} {...rest}>
      <option value="">Selecione...</option>
      {elementos.map(elemento => {
        return (
          <option key={elemento.id} value={elemento.nome}>
            {elemento.nome}
          </option>
        );
      })}
    </select>
  </div>
);

export default Select;
