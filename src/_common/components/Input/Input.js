import React from "react";

const Input = ({ divWrapperClass, id, label, inputClass, ...rest }) => (
  <div className={divWrapperClass}>
    <label htmlFor={id}>{label}</label>
    <input className={inputClass} {...rest} />
  </div>
);

export default Input;
